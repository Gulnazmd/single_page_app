import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';



export default function Header(props) {

	return (
		<Navbar bg="light" expand={false}>
      <Container fluid>
        <NavbarBrand href="#">MaturDev</NavbarBrand>
        <NavbarToggle aria-controls="offcanvasNavbar" />
			</Container>
		</Navbar>
	);
}
