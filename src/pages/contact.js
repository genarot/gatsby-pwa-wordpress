import React from "react"
import { Button, Form } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Contact = () => {
  return (
    <PrimaryLayout column={"col-10"}>
      <div className="pt-5">
        <h1>Contacts</h1>
        <Form>
          <Form.Group controlId="contactForm.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email... "/>
          </Form.Group>
          <Form.Group controlId="contactForm.Subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="email" placeholder="Subject..."/>
          </Form.Group>
          <Form.Group controlId="contactForm.Message">
            <Form.Label>Message </Form.Label>
            <Form.Control as={"textarea"} rows={3}/>
          </Form.Group>
          <Form.Group controlId="contactForm.Submit">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </PrimaryLayout>
  )
}

export default Contact
