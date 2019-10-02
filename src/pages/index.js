import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Index = () => {
  return (
    <PrimaryLayout>
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
      <Post
        title={"This is our first post"}
        excerpt={"Whe are writing something to be displayed in our excerpt."}
      />
    </PrimaryLayout>
  )
}

export default Index
