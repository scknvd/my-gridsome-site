<template>
  <div class="layout" :class="{'sticky-header': $route.name === 'home'}">
      <header class="header sticky">
        <div class="container">
        <div class="left">
            <a href="/" class="home-link active--exact active">
                <g-image alt="Example image" src="~/assets/img/logo.svg" width="135" />
            </a>
        </div>
        <nav class="nav right">
            <a href="/journal" class="nav__link">Journal</a
            ><a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
        </div>
    </header>
    <slot></slot>
    <footer class="footer">
        <div class="container">
            <span>Copyright © 2021</span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'LayoutPage',
    created() {
        console.log(this.$route.name === 'home')
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 1.5rem;
}
img {
    max-width: 100%;
}
.header{
    position: relative;
    height: 6rem;
    z-index: 10;
    &.sticky{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    &>.container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
    .nav>a {
        font-size: .9rem;
        font-weight: 600;
        text-decoration: none;
        margin-top: 4px;
        margin-right: 3rem;
        padding-bottom: 4px;
        border-bottom: 1px solid;
        border-color: transparent;
        transition: border .15s;
        &:last-of-type {
            margin: 0;
        }
    }
}
@media (min-width: 860px) {
    .container {
        padding: 0 6rem;
    }
}
</style>