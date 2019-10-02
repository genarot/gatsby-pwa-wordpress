import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

const Index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-6">
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
            <Post title={'This is our first post'} excerpt={'Whe are writing something to be displayed in our excerpt.'}/>
          </div>
        </div>
      </div>
      <Footer />
      {/*<div>*/}
      {/*<Link to={'/test'}>Go to test</Link>*/}
      {/*<a href={'http://google.com.ni'} target={'_blank'}>Go to google</a>*/}
      {/*</div>*/}
    </div>
  )
}

export default Index
