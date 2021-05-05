<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div class="project" v-for="item in $page.projects.edges" :key="item.id">
          <g-link :to="'/project/' + item.node.path + '/'" class="project-link">
            <g-image
              :alt="item.node.title"
              :src="GRIDSOME_API_URL + item.node.picUrl.url"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              v-if="item.node.picUrl && item.node.picUrl.url"
            />
            <h3 class="project-title">{{item.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="cate in item.node.categories" :key="cate.id">{{cate.name}}</span>
            </div>
            </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="container latest-journals-heading">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link :to="'/journal/' + item.node.path + '/'" class="journal" v-for="item in $page.journals.edges" :key="item.id">
            <h3 class="journal-title">{{item.node.title}}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
  projects: allStrapiProject{
    edges{
      node{
        id
        date
        categories{
          name
        }
        picUrl{
          url
        }
        path
        title
      }
    }
  }
  journals: allStrapiJournal{
    edges{
      node{
        title
        path
        content
        author{
          firstname
          lastname
        }
      }
    }
  }
}
</page-query>
<script>
import axios from 'axios'
const GRIDSOME_API_URL = process.env.GRIDSOME_API_URL
export default {
  name: 'IndexPage',
  data() {
    return {
      GRIDSOME_API_URL
    }
  },
  async mounted() {
    try {
      const results = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      this.todos = results.data
    } catch (error) {
      console.log(error)
    }
  }
};
</script>

<style scoped>
.hero{text-align:center;width:480px;max-width:100%;margin:0 auto;padding:4rem 0 8rem}
.hero-title{font-size:3rem;font-weight:700;padding:0;margin:0 0 2rem}
.hero-subtitle,.hero-subtitle p,.hero-title p{margin:0;padding:0}
.hero-subtitle{font-size:1.15em;font-weight:400;line-height:1.68;opacity:.6}
.projects{display:grid;grid-template-columns:1fr 1fr;grid-gap:4rem}
.project{grid-column:auto/span 2;text-align:center}
.project-link{text-decoration:none}
.thumbnail{height:560px;-o-object-fit:cover;object-fit:cover;transition:all .15s ease;box-shadow:0 0 40px -20px rgba(0,0,0,.25)}
.project-title{font-size:1rem;color:var(--color-contrast);margin:2rem 0 1rem}
.categories{font-size:.8rem;color:var(--color-contrast-1)}
.category{margin-right:.8rem}
.category:last-of-type{margin:0}
.project:hover .thumbnail{transform:scale(1.02);box-shadow:0 20px 40px -20px rgba(0,0,0,.25)}
@media (min-width:920px){
    .project{grid-column:auto/span 1}
    .project:nth-child(3n+1){grid-column:auto/span 2}
}
</style>