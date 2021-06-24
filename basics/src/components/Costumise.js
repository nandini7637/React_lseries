import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
/*import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'*/
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Accordion from 'react-bootstrap/Accordion'

class Costumise extends Component{
    render(){
        return (
               <>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <br />
<h5>CARDS</h5>
<br />
  <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br />
<h5>INPUT FORM</h5>
<br />
<div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</div>
<br />
<h5>ACCORDIAN</h5>
<br />
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

</>
        )
    }
}

export default Costumise;