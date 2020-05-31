// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Learn with Beto',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: "./content/posts",
        path: "*.md",
        typeName: "Post",
        refs: {
          // Reference to existing authors by id.
          // author: 'Author',
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            // route: '/tags/:id',
            create: true
          }
        }
      },
    }
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ],
    Tag: [
      {
        path: '/blog/tags/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
