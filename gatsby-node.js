const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts ",
    })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions;
  return graphql(`
    query newPostPages {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
      result.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
          path: node.fields.slug,
          component: 
        })
      })
  })
}
