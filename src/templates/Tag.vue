<template>
  <Layout>
      <g-link to="/blog">Back to blog</g-link>
      <h2>Tags</h2>
      <h3>Showing tags for {{ $page.tag.title }}</h3>
      <article style="margin-bottom: 2.5rem;" v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <!-- <figure>
        <g-image :src="edge.node.cover_image" :alt="edge.node.cover_image_alt" style="width:100%" />
        <figcaption>{{ edge.node.cover_image_alt }}</figcaption>
      </figure> -->
      <g-image style="width: 100%" :alt="edge.node.cover_image_alt" :src="edge.node.cover_image" />
      <g-link class="post-link" :to="edge.node.path">{{ edge.node.title }}</g-link>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted on {{ edge.node.date }}. Time to read {{ edge.node.timeToRead }} minutes.</p>
      <g-link style="padding-right: 2rem;" v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">{{ tag.id }}</g-link>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tag(id: $id) {
    id
    title
    path
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            path
            date (format: "MMMM Do, YYYY")
            tags {
                id
                path
            }
            timeToRead
            excerpt
            title
            cover_image_alt
            cover_image (width: 600, height: 200, blur: 15, quality: 80)
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style>

</style>
