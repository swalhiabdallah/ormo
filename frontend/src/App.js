import Header from "./appmo/header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./appmo/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./appmo/home";
import Login from "./appmo/login";
import Register from "./appmo/register";
import AboutUs from "./appmo/about";
import User from "./appmo/user";
import Product from "./appmo/product";
import NewArriversp from "./appmo/newarrivesproducts";

import "./css/slide.css";
import "./css/style.css";
import "./css/style-a.css";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Header products={products} />
				<Routes>
					<Route path="/" element={<Home products={products} />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/support" element={<AboutUs />}></Route>
					<Route path="/user" element={<User />}></Route>
					<Route path="/product/:parameterName" element={<Product products={products} />}></Route>
					<Route path="/newarrives" element={<NewArriversp products={products} />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
