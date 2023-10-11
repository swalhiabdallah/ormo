import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
	let { parameterName } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios
			.get(`http://127.0.0.1:8000/api/products/${parameterName}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [parameterName]);

	// const ProductPage = ({ products }) => {
	//   // Extract the first 10 products from the array
	//   const firstTenProducts = products.slice(0, 10);

	// Use the parameter value here
	// console.log(parameterName);

	return (
		<div className="container pt-3 pb-5 my-5">
			<div key={product.id} className="row">
				<div className="col-6 text-center">
					<div className="my-5">
						<img src={product.image} alt={product.name} style={{ width: "50%", objectFit: "contain" }} />
					</div>
					<div>
						{product.images
							? product.images.map((e, i) => {
									return (
										<span className="border border-dark border-2 m-2" key={i}>
											<img className="border border-dark border-2" src={e} alt="" width="100px" />
										</span>
									);
							  })
							: "n"}
					</div>

					{/* <img src={product.image} alt={product.name} /> */}
				</div>

				<div className="col-6 mt-5 col-xsm-12">
					<div>
						<h1 className="mt-5 mb-4">{product.name}</h1>
						{/* <p>{product.description}</p> */}
					</div>

					<div>
						<div className="d-block my-4">
							<span>
								<img src="/img/prod/Tag_Avis_product.png" alt="" width="150px" className="pb-2" />
							</span>
							<span className="fs-6" style={{ fontWeight: "501", color: "#61a0d3" }}>
								{product.avis} <span className="fs-5"> 33 Avis</span>
							</span>
						</div>
					</div>
					<div className="ms-1 mb-2">
						<span className="fw-bold me-4 fs-4" style={{ color: "#53d297" }}>
							{product.price} MAD
						</span>
						<span className={`text-decoration-line-through fs-4 fw-bolder ${product.price_old ? "" : "d-none"}`} style={{ color: "gray" }}>
							{product.price_old} MAD{" "}
						</span>
					</div>
					<div className="ms-1 mb-3 pt-4">
						<span className="py-3 px-5 text-dark fw-bold m-0" style={{ background: "#f5f5f7" }}>
							{"<"}
						</span>
						<span className="py-3 px-5 text-dark fw-bold" style={{ background: "#f5f5f7" }}>
							{"1"}
						</span>
						<span className="py-3 px-5 text-dark fw-bold" style={{ background: "#f5f5f7" }}>
							{">"}
						</span>
					</div>
					<div className="ms-1 pt-4 mt-4">
						{" "}
						<span className="py-3 px-5 text-dark fw-bold" style={{ background: "#f5f5f7" }}>
							Add to Cart
						</span>
						<span className="py-3 px-5 mx-3 text-light fw-bold" style={{ background: "#4ad295" }}>
							Achetez-le
						</span>
					</div>
				</div>
			</div>
			<hr className="mt-5 mb-4" />
			<div className="row">
				<div className="col-6 text-center">
					<div className="py-3 px-5 text-light fw-bold" style={{ background: "#4ad295" }}>
						DESCRIPTION
					</div>
				</div>
				<div className="col-6 text-center">
					<div className="py-3 px-5 text-dark fw-bold" style={{ background: "#f5f5f7" }}>
						AVIS DES CLIENTS
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
