import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">HOME</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/products">Products</Nav.Link>
								<Nav.Link href="/addproduct">Add Product</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				;
			</>
		);
	}
}

export default NavBar;
