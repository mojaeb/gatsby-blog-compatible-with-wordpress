
const path = require(`path`)
const slash = require(`slash`)



exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
        {
            allWordpressPost {
                edges {
                    node {
                        id
                        path
                        status
                        template
                        format
                    }
                }
            }
              
        }
    `)
  if (result.errors) throw new Error(result.errors)
  //templates
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const { allWordpressPost } = result.data

  //generate the pages
  allWordpressPost.edges.forEach(edge => {
    createPage({
      // path: `/post/${decodeURIComponent(edge.node.path)}`,
      path: decodeURIComponent(edge.node.path),
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  //

}