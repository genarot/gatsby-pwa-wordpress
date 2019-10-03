import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { graphql } from "gatsby"

const BlogpostLayout = (props) => {
  const postInfo = props.data.markdownRemark;
  return (
    <div>
      <Header activeKey={props.activeMenu || window.location.pathname}/>
      <div className="container">
        <div className="row justify-content-md-center">
          <h1>{postInfo.frontmatter.title}</h1>
          <br/>
          <div dangerouslySetInnerHTML={{__html: postInfo.html}}></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
    query getPostInfo($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`