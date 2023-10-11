import React, { createContext, useState } from "react";
import Products from "./Products";
import Product from "./Product";

export const ProductsContext = createContext([]);

const App = () => {
	const [products, setProducts] = useState([
		{ id: 1, name: "Product 1", price: 10 },
		{ id: 2, name: "Product 2", price: 20 },
		{ id: 3, name: "Product 3", price: 30 },
	]);

	return (
		<ProductsContext.Provider value={[products, setProducts]}>
			<h1>Products List</h1>
			<Products />
			<hr />
			<h1>Product Details</h1>
			<Product />
		</ProductsContext.Provider>
	);
};

export default App;
