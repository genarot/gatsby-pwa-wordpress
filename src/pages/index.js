import React from "react"
import {graphql} from "gatsby"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Index = (props) => {
  return (
    <PrimaryLayout>
      {props.data.allMarkdownRemark.nodes.map(post => (
        <Post
          title={post.frontmatter.title}
          image={post.frontmatter.image}
          excerpt={post.excerpt}
        />
      ))}
    </PrimaryLayout>
  )
}
export const query = graphql`
query markDown {
  allMarkdownRemark {
    nodes {
      frontmatter{
        title
        date
        keywords
        image
      }
      excerpt
      html
    }
  }
}
`
export default Index
