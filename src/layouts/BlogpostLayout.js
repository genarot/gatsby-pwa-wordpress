import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const BlogpostLayout = (props) => {
  return (
    <div>
      <Header activeKey={props.activeMenu || window.location.pathname}/>
      <div className="container">
        <div className="row justify-content-md-center">
          placeholder
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogpostLayout
