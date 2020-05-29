<template>
  <Layout>
    <h1>Blog</h1>
    <article style="margin-bottom: 2.5rem;" v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <!-- <figure>
        <g-image :src="edge.node.cover_image" :alt="edge.node.cover_image_alt" style="width:100%" />
        <figcaption>{{ edge.node.cover_image_alt }}</figcaption>
      </figure> -->
      <g-image style="width: 100%" :alt="edge.node.cover_image_alt" :src="edge.node.cover_image" />
      <small class="cover-image-description">
        {{`${edge.node.cover_image_alt}. Photo by`}}
        <a :href="edge.node.photographer_site" target="_blank" rel="noopener">{{ edge.node.photographer }}</a>
         on <a :href="edge.node.image_from" target="_blank" rel="noopener">Unsplash</a>
      </small>
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
        cover_image_alt
        cover_image (width: 1200, height: 460, blur: 10, quality: 90)
        photographer
        photographer_site
        image_from
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
