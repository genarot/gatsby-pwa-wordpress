import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { graphql } from "gatsby"

const BlogpostLayout = (props) => {
  const postInfo = props.data.wordpressPost;
  return (
    <div>
      <Header activeKey={props.activeMenu || window.location.pathname}/>
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{__html: postInfo.title}} ></h1>
          <div dangerouslySetInnerHTML={{__html: postInfo.content}} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogpostLayout

// export const query = graphql`
//  query getPostInfo($slug: String!) {
//   markdownRemark(fields: {slug: {eq: $slug}}) {
//     frontmatter {
//       title
//       date
//       keywords
//     }
//     html
//   }
// }
// `
export const query =  graphql`  
  query getWpPostInfo($slug: String!) {
    wordpressPost(slug: {eq:$slug}) {
      content
      title
      modified
      date
      author {
        id
        name
      }
      
      categories {
        id
        name
      }
      featured_media {
        source_url
      }
    }
  }
`
