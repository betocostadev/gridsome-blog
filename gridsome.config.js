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
        typeName: 'Post',
        path: './content/posts/**/*.md',
        // route: './content/posts/:slug'
      }
    }
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Blog.vue'
      }
    ]
  }
}
