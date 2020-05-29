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
        // route: "/posts/:title",
      },
    }
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
