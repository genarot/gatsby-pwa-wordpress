import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SEO from "../components/SEO"

const PrimaryLayout = (props) => {
  return (
    <div>
      <SEO/>
      <Header activeKey={props.activeMenu || window.location.pathname}/>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column || "col-xs-6"}>
            {props.children}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PrimaryLayout
