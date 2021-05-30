import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
class ListProduct extends React.Component {
	state = {
		data: '',
	};
	componentDidMount = async () => {
		const request = await fetch('http://localhost:3001/products');
		const data = await request.json();
		this.setState({ data });
		console.log(this.state.data);
	};

	render() {
		return (
			<>
				<Container>
					<Row>
						{this.state.data &&
							this.state.data.map((product) => {
								return <SingleProduct product={product} />;
							})}
					</Row>
				</Container>
			</>
		);
	}
}

export default ListProduct;
