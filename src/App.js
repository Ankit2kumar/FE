import './App.css';
import ListProduct from './components/ListProduct.jsx';
import NavBar from './components/NavBar.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Route path="/products" component={ListProduct} exact />
				<Route path="/addproduct" component={UpdateProduct} exact />
			</Router>
		</div>
	);
}

export default App;
