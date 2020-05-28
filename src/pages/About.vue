<template>
  <Layout ref="layout">
    <h1>About me</h1>
    <p>I'm Beto Costa, a Front-end developer currently working with Vue.</p>
    <a :class="theme" class="page-link" href="https://betocostadev.github.io/" target="_blank" rel="noopener noreferrer">My Portfolio</a>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Beto Costa'
  },

  data() {
    return {
      theme: 'dark-nav-link',
    }
  },

  computed: {
    togglePageLinkClass() {
      if (this.$refs.layout.theme === 'dark-theme') {
        this.theme = 'light-nav-link'
      }
      else {
        this.theme = 'dark-nav-link'
      }
    }
  },
  mounted () {
    console.log(this.$refs.layout.theme)
    console.log(this.theme);
  },
}
</script>
