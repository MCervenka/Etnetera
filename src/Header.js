import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Logo from "./content/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const volnePozice = 4;

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" expand="md" collapseOnSelect sticky="top" >
                    <Navbar.Brand><Image src={Logo} width="150" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ textTransform: "uppercase" }}>
                        <Nav></Nav>
                        <Nav >
                            <LinkContainer exact to="/1">
                                <Nav.Link> <div>Domů</div> </Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/">
                                <Nav.Link> <div>Kdo jsme</div> </Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/2">
                                <Nav.Link> <div>Co děláme</div> </Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/3">
                                <Nav.Link> <div>Reference</div> </Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/4">
                                <Nav.Link> <div>Práce u nás ({volnePozice}) </div></Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/5">
                                <Nav.Link> <div>Kontakt</div> </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


export default Header;