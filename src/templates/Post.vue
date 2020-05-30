<template>
  <Layout>
      <!-- <h2>{{ $page.post.title }}</h2> -->
      <g-link to="/blog">Back to blog</g-link>
      <article v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query($path: String!) {
  post(path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  methods: {
    getTitle() {
      console.log(this.$page.post.title)
    }
  },
  created () {
    this.getTitle()
  },

}
</script>

<style>

</style>
