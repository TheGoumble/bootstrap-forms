import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "./formTemp.css"

const FormTemp = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      })
  }

  const validateForm = () => {
    const { name, phone, email, message } = form
    const newErrors = {}

    if (!name || name === "") newErrors.name = "Please enter your name."
    if (!phone || phone === "")
      newErrors.phone = "Please enter your phone number."
    if (!email || email === "")
      newErrors.email = "Please enter your email address."
    if (!message || message === "")
      newErrors.message = "Please enter a message to send to us."

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      // this is to clear the form once criteria is met
      document.getElementById("name-input").value = ""
      document.getElementById("phone-input").value = ""
      document.getElementById("email-input").value = ""
      document.getElementById("message-input").value = ""
      setForm("")
    }
  }

  return (
    <div id="form">
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            id="name-input"
            type="text"
            class="form-control"
            placeholder="Enter your first name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            id="phone-input"
            type="tel"
            class="form-control"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email-input"
            type="email"
            class="form-control"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment or Message</Form.Label>
          <Form.Control
            id="message-input"
            as="textarea"
            rows={3}
            className="form-control"
            placeholder="Enter a message or comment"
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default FormTemp
