import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
const REACT_APP_API = process.env.REACT_APP_API;
class UpdateProduct extends React.Component {
	state = {
		product: {
			ProductName: '',
			url: '',
		},
	};

	handleChange = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		this.setState({
			...this.state.product,
			[id]: value,
		});
	};
	submitData = async (e) => {
		e.preventDefault();
		const request = await fetch(`${REACT_APP_API}/products`, {
			method: 'POST',
			body: JSON.stringify(this.state.product),
			headers: {
				'Content-type': 'application/json',
			},
		});
		if (request.ok) {
			alert('Product Posted');
		}
	};
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col sm={5}>
							<Form onSubmit={this.submitData}>
								<Form.Group className="mb-3" controlId="productName">
									<Form.Label>Product Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter email"
										onChange={this.handleChange}
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="productImage">
									<Form.Label>Product Image</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter email"
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Button type="submit">Submit</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
export default UpdateProduct;
