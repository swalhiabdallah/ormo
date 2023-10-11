import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sortfrombigicon = (props) => {
	return (
		<span onClick={props.onClick}>
			<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
				<g id="SVGRepo_iconCarrier">
					{" "}
					<path
						d="M9 8.24994C8.81 8.24994 8.62 8.17994 8.47 8.02994L6.5 6.05994L4.53 8.02994C4.24 8.31994 3.76 8.31994 3.47 8.02994C3.18 7.73994 3.18 7.25994 3.47 6.96994L5.97 4.46994C6.26 4.17994 6.74 4.17994 7.03 4.46994L9.53 6.96994C9.82 7.25994 9.82 7.73994 9.53 8.02994C9.38 8.17994 9.19 8.24994 9 8.24994Z"
						fill="#000000"
					></path>{" "}
					<path d="M6.5 19.75C6.09 19.75 5.75 19.41 5.75 19V5C5.75 4.59 6.09 4.25 6.5 4.25C6.91 4.25 7.25 4.59 7.25 5V19C7.25 19.41 6.91 19.75 6.5 19.75Z" fill="#000000"></path>{" "}
					<path d="M20 17.25H12C11.59 17.25 11.25 16.91 11.25 16.5C11.25 16.09 11.59 15.75 12 15.75H20C20.41 15.75 20.75 16.09 20.75 16.5C20.75 16.91 20.41 17.25 20 17.25Z" fill="#000000"></path>{" "}
					<path d="M16 11.25H12C11.59 11.25 11.25 10.91 11.25 10.5C11.25 10.09 11.59 9.75 12 9.75H16C16.41 9.75 16.75 10.09 16.75 10.5C16.75 10.91 16.41 11.25 16 11.25Z" fill="#000000"></path>{" "}
					<path d="M14 8.25H12C11.59 8.25 11.25 7.91 11.25 7.5C11.25 7.09 11.59 6.75 12 6.75H14C14.41 6.75 14.75 7.09 14.75 7.5C14.75 7.91 14.41 8.25 14 8.25Z" fill="#000000"></path>{" "}
					<path d="M18 14.25H12C11.59 14.25 11.25 13.91 11.25 13.5C11.25 13.09 11.59 12.75 12 12.75H18C18.41 12.75 18.75 13.09 18.75 13.5C18.75 13.91 18.41 14.25 18 14.25Z" fill="#000000"></path>{" "}
				</g>
			</svg>
		</span>
	);
};

const Sortfromsmlicon = (props) => {
	return (
		<span onClick={props.onClick}>
			<span>
				<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M6.5 19.7499C6.31 19.7499 6.12 19.6799 5.97 19.5299L3.47 17.0299C3.18 16.7399 3.18 16.2599 3.47 15.9699C3.76 15.6799 4.24 15.6799 4.53 15.9699L6.5 17.9399L8.47 15.9699C8.76 15.6799 9.24 15.6799 9.53 15.9699C9.82 16.2599 9.82 16.7399 9.53 17.0299L7.03 19.5299C6.88 19.6799 6.69 19.7499 6.5 19.7499Z"
							fill="#000000"
						></path>{" "}
						<path d="M6.5 19.75C6.09 19.75 5.75 19.41 5.75 19V5C5.75 4.59 6.09 4.25 6.5 4.25C6.91 4.25 7.25 4.59 7.25 5V19C7.25 19.41 6.91 19.75 6.5 19.75Z" fill="#000000"></path>{" "}
						<path d="M20 17.25H12C11.59 17.25 11.25 16.91 11.25 16.5C11.25 16.09 11.59 15.75 12 15.75H20C20.41 15.75 20.75 16.09 20.75 16.5C20.75 16.91 20.41 17.25 20 17.25Z" fill="#000000"></path>{" "}
						<path d="M16 11.25H12C11.59 11.25 11.25 10.91 11.25 10.5C11.25 10.09 11.59 9.75 12 9.75H16C16.41 9.75 16.75 10.09 16.75 10.5C16.75 10.91 16.41 11.25 16 11.25Z" fill="#000000"></path>{" "}
						<path d="M14 8.25H12C11.59 8.25 11.25 7.91 11.25 7.5C11.25 7.09 11.59 6.75 12 6.75H14C14.41 6.75 14.75 7.09 14.75 7.5C14.75 7.91 14.41 8.25 14 8.25Z" fill="#000000"></path>{" "}
						<path d="M18 14.25H12C11.59 14.25 11.25 13.91 11.25 13.5C11.25 13.09 11.59 12.75 12 12.75H18C18.41 12.75 18.75 13.09 18.75 13.5C18.75 13.91 18.41 14.25 18 14.25Z" fill="#000000"></path>{" "}
					</g>
				</svg>
			</span>
		</span>
	);
};

function NewArriversp() {
	// Handle click events for changing the current page
	const handleClick = (page) => {
		setCurrentPage(page);
	};

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

	// const sortedProductsbydatereverced = products.sort((a, b) => {
	// 	return new Date(b.created_at) - new Date(a.created_at);
	// });

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10);

	// Calculate the index of the first and last items on the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	// Get the current page of items by slicing the products array
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	// Calculate the total number of pages based on the number of items
	const totalPages = Math.ceil(products.length / itemsPerPage);

	// handel clcik price >

	const handleClickpricefrombig = () => {
		const sortedProductsbyprice = [...products].sort((a, b) => b.price - a.price);
		setProducts(sortedProductsbyprice);
	};

	// handel clcik price <
	const handleClickpricefromsml = () => {
		const sortedProductsbyprice = [...products].sort((a, b) => a.price - b.price);
		setProducts(sortedProductsbyprice);
	};

	// handel clcik date <
	const handleClickdatefrombig = () => {
		const sortedProductsbydate = [...products].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
		setProducts(sortedProductsbydate);
	};
	// handel clcik date >
	const handleClickdatefromsml = () => {
		const sortedProductsbydate = [...products].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
		setProducts(sortedProductsbydate);
	};

	const handleClicknamefroma = () => {
		const sortedProductsbyname = products.slice().sort((a, b) => a.name.localeCompare(b.name));
		setProducts(sortedProductsbyname);
	};

	const handleClicknamefromz = () => {
		const sortedProductsbyname = products.slice().sort((a, b) => b.name.localeCompare(a.name));
		setProducts(sortedProductsbyname);
	};

	// Create an array of page numbers for rendering the pagination links
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	//sort prod by date from > to <

	return (
		<div className="products">
			<div className="mt-5 text-center">
				<div className="">
					<div>
						<span className="mx-2">
							<Sortfrombigicon onClick={handleClickpricefrombig} />
							<span className="p-2 mb-4 border border-dark border-2 rounded">Price</span>
							<Sortfromsmlicon onClick={handleClickpricefromsml} />
						</span>
						<span className="mx-2">
							<Sortfrombigicon onClick={handleClickdatefrombig} />
							<span className="p-2 mb-4 border border-dark border-2 rounded">Date</span>
							<Sortfromsmlicon onClick={handleClickdatefromsml} />
						</span>
						<span className="mx-2">
							<Sortfrombigicon onClick={handleClicknamefromz} />
							<span className="p-2 mb-4 border border-dark border-2 rounded">Name</span>
							<Sortfromsmlicon onClick={handleClicknamefroma} />
						</span>
					</div>
				</div>
			</div>
			<div className="text-center my-5">
				<h3 className="h2 fw-bolder fs-2 mb-3 mt-5">Nouveau Arrivage</h3>
				<span className="text-secondary">Tous les nouveaux arrivages et produits tendances icil</span>
			</div>
			<div className="container-fluid">
				<div className="row">
					{currentItems.map((pro) => (
						<div key={pro.id} className="col-md-3 pb-5">
							<Link to={`/product/${pro.id}`} style={{ textDecoration: "none", color: "inherit" }}>
								<img src={pro.image} alt={pro.tilte} style={{ width: "100%", objectFit: "contain" }} />
								<div className="text-dark text-center w-95 m-auto">
									<span className="h6 fw-bolder fs-6">{pro.name}</span>
									<span className="d-block py-1">
										<img src="/img/prod/T.png" alt="" />
										<span className="fs-6" style={{ fontWeight: "501", color: "#61a0d3" }}>
											{pro.avis} <span>Avis</span>
										</span>
									</span>
									<span className="fw-bold" style={{ color: "#53d297" }}>
										<span className={`text-decoration-line-through text-dark fw-lighter pe-2 ${pro.price_old ? "" : "d-none"}`}>{pro.price_old} MAD </span>
										{pro.price} MAD
									</span>
								</div>
								<span>{console.log(new Date(pro.created_at).getDay())}</span>
							</Link>
						</div>
					))}
				</div>
				<div className="d-flex justify-content-center mb-5">
					{pageNumbers.map((page) => (
						<button className="btn m-1 fw-bold" key={page} onClick={() => handleClick(page)} style={{ backgroundColor: "#4ad295" }}>
							{page}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default NewArriversp;
