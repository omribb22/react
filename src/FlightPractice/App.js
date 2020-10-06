import React from "react"
import {ImAirplane} from "react-icons/im"
import {Navbar, Nav} from "react-bootstrap"

function App(){


    return(
    <>
    <Navbar bg="dark" variant="dark">
        <ImAirplane width="40" height="40"/>
        <Navbar.Brand href="home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>   
        </>
    )
}

export default App