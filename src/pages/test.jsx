import React from "react"
import Header from "../components/Header"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"

const Test = () => {
  const comebackHome = () => {
    navigate("/")
  }
  return (
    <div>
      <Header/>
      <div>
        <Button onClick={comebackHome}>Return to home</Button>
      </div>
      <h2>Test</h2>
    </div>
  )
}

export default Test
