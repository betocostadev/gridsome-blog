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
      <div class="tag-container">
        <div class="tag-item" v-for="tag in edge.node.tags" :key="tag.id">
          <g-link style="padding-right: 2rem;" :to="tag.path">
            <g-image style="height: 20px; width: 20px; background: white; border-radius: 50%; padding: 6px;" alt="icon" :src="getIcon(tag.id)" />{{tag.id}}</g-link>
        </div>

      </div>
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
        tags {
          id
          path
        }
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
  methods: {

    getIcon(tag) {
      switch (tag) {
        case 'vue':
          return './icons/vue.svg'
          break;
        case 'react':
          return './icons/react.svg'
          break;
        case 'apollo':
          return './icons/apollostack.svg'
          break;
        case 'gridsome':
          return './icons/gridsome.svg'
          break
        case 'typescript':
          return './icons/typescropt-icon.svg'
          break
        case 'python':
          return './icons/python.svg'
          break
        case 'markdown':
          return './icons/markdown.svg'
          break
        case 'computer science':
          return './icons/computer-science.svg'
          break
        case 'graphql':
          return './icons/graphql.svg'
          break
        case 'blog':
          return './icons/blog.svg'
          break
        case 'lecture':
          return './icons/lecture.svg'
          break
        case 'note':
          return './icons/lecture.svg'
          break
        case 'database':
          return './icons/db.svg'
          break
        case 'github':
          return './icons/github.svg'
          break
        default:
          break;
      }
    }
  },
}
</script>

<style>

</style>
