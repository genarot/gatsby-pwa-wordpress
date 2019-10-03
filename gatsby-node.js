const { createFilePath } = require("gatsby-source-filesystem")
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts",
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
        console.log(node)
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/layouts/BlogpostLayout.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
  })
}
