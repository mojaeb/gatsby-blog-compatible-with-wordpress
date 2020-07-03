const slash = require(`slash`)


module.exports = function(posts, createPage, template) {
  //generate all wordpress posts
  posts.forEach(edge => {
    createPage({
      // path: `/post/${decodeURIComponent(edge.node.path)}`,
      path: decodeURIComponent(edge.node.slug),
      component: slash(template),
      context: {
        id: edge.node.id,
      },
    })
  })
}