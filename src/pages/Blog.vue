<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <g-link class="post-link" :to="edge.node.path">{{ edge.node.title }}</g-link>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted on {{ edge.node.date }}. Time to read {{ edge.node.timeToRead }} minutes.</p>
      <span style="padding-right: 2rem;" v-for="tag in edge.node.tags" :key="tag">
        #{{ tag }}
      </span>
      <!-- <div v-html="edge.node.excerpt"></div> -->
    </article>
  </Layout>
</template>

<static-query>
{
  allPost {
    totalCount
    edges {
      node {
        id
        path
        date (format: "MMMM Do, YYYY")
        tags
        timeToRead
        excerpt
        title
        content
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>

<style>

</style>
