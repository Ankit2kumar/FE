import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
class SingleProduct extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Col sm={4}>
					<Card>
						<Card.Img
							variant="top"
							className="img-fluid"
							src={this.props.product.url}
						/>
						<Card.Body>
							<Card.Title>{this.props.product.productName}</Card.Title>

							<Button variant="secondary" className="mx-2">
								Edit
							</Button>
							<Button variant="primary">Delete</Button>
						</Card.Body>
					</Card>
				</Col>
			</>
		);
	}
}

export default SingleProduct;
