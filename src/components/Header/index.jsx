import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./header.css"

const Header = () => (
  <header>
    <Navbar activeKey="/home" id="nav">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  </header>
)

export default Header
