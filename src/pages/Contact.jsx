import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Form from "../components/Form"

const Contact = () => {
  const [show, setShow] = useState(false);
  const [stateFromChild, setStateFormChild] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <h3>this is contact</h3>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Form handleClose={setShow} setStateFormChild = {setStateFormChild}/></Modal.Body>
        
      </Modal>

      <Form />
    </>
  )
}

export default Contact
