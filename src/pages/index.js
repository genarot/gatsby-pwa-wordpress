import React from "react"
import {graphql} from "gatsby"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Index = (props) => {
  return (
    <PrimaryLayout>
      {props.data.allWordpressPost.nodes.map((post, idx) => (
        <Post
          key={idx}
          title={post.title}
          image={post.featured_media.source_url}
          excerpt={post.excerpt}
          readMore={post.slug}
        />
      ))}
    </PrimaryLayout>
  )
}
//Get post from markdown files
// export const query = graphql`
// query markDown {
//   allMarkdownRemark {
//     nodes {
//       frontmatter{
//         title
//         date
//         keywords
//         image
//       }
//       excerpt
//       html
//       fields {
//         slug
//       }
//     }
//   }
// }
// `
export default Index

export const query = graphql`
query postWordpress {
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
      }
    }
  }
  }
`
