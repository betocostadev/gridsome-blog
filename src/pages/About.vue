<template>
  <Layout ref="layout">
    <h1>About me</h1>
    <p>I'm Beto Costa, a Front-end developer currently working with Vue.</p>
    <a :class="navTheme" class="page-link" href="https://betocostadev.github.io/" target="_blank" rel="noopener noreferrer">My Portfolio</a>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Beto Costa'
  },

  data() {
    return {
      navTheme: 'dark-nav-link',
    }
  },

  methods: {
    togglePageLinkClass() {
      if (this.$refs.layout.theme === 'dark-theme') {
        this.navTheme = 'light-nav-link'
      }
      else {
        this.navTheme = 'dark-nav-link'
      }
    }
  },
  mounted () {
    this.togglePageLinkClass()
    // console.log(this.$refs.layout.theme)
  },
}
</script>
