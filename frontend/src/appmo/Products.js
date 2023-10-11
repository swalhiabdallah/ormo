import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
	const products = props.products;

	const sortedProductsbydatereverced = products.sort((a, b) => {
		return new Date(b.created_at) - new Date(a.created_at);
	});
	const prod = sortedProductsbydatereverced.slice(0, 10);

	// from < to > by price
	// const sortedProductsbyprice = products.sort((a, b) => a.created_at - b.created_at);
	// from < to > by date
	// const sortedProductsbydate = products.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
	// reverce the order ??
	// const reversedProducts = sortedProducts.reverse();
	// reverce the order ??
	// {
	// 	console.log(sortedProducts);
	// }

	return (
		<div className="products">
			<div className="text-center mb-3">
				<h3 className="h2 fw-bolder fs-2 mb-3">Nouveau Arrivage</h3>
				<span className="text-secondary">Tous les nouveaux arrivages et produits tendances icil</span>
			</div>
			<div className="container-fluid">
				<div className="row">
					{prod.map((pro) => (
						<div key={pro.id} className="col-md-3 pb-5">
							<Link to={`/product/${pro.id}`} style={{ textDecoration: "none", color: "inherit" }}>
								<img src={pro.image} alt={pro.tilte} style={{ width: "100%", objectFit: "contain" }} />
								<div className="text-dark text-center w-95 m-auto">
									<span className="h6 fw-bolder fs-6">{pro.name}</span>
									<span className="d-block py-1">
										<img src="/img/prod/T.png" alt="" />
										<span className="fs-6" style={{ fontWeight: "501", color: "#61a0d3" }}>
											{pro.avis} <span> 33 Avis</span>
										</span>
									</span>
									<span className="fw-bold" style={{ color: "#53d297" }}>
										<span className={`text-decoration-line-through text-dark fw-lighter pe-2 ${pro.price_old ? "" : "d-none"}`}>{pro.price_old} MAD </span>
										{pro.price} MAD
									</span>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Products;
