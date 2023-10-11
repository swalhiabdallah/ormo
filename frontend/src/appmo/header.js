import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import withAuth from "./withAuth";

function NavBarTop() {
	return (
		<div
			className="overflow-hidden"
			style={{
				background: "#83e600",
				width: "100%",
				height: "30px",
				position: "sticky",
			}}
		>
			<p className="fs-6 text">orimo Maroc Centre commercial en ligne officiel. Pour toute question, veuillez contacter @s</p>
		</div>
	);
}

function Dropdownmenu(props) {
	return (
		<div className={`container-fluid scrollable-div justify-content-center ps-5 bg-white ${props.a ? "show" : "d-none"}`} aria-labelledby="navbarDropdown">
			<div className="row pt-3 DropDown scrollable-div">
				<li className="col-3 text-decoration-none list-unstyled">
					<div className="mb-2">
						<img src="/img/dropdown/product1.jpeg" alt="" />
					</div>
					<Link to="/" className="text-decoration-none fs-4 fw-bold">
						Power
					</Link>
					<ul className="list-unstyled pl-3 mt-2 text-decoration-none">
						<li className="mb-2">
							<Link to="/" className="text-decoration-none">
								Power Banks
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Multiprises
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Chargeurs Muraux
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Chargeurs de Voiture
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Câbles
							</Link>
						</li>
					</ul>
				</li>
				<li className="col-3 text-decoration-none list-unstyled">
					<div className="mb-2">
						<img src="/img/dropdown/product2.jpeg" alt="" />
					</div>
					<Link to="/" className="text-decoration-none fs-4 fw-bold">
						Audio
					</Link>
					<ul className="list-unstyled pl-3 mt-2">
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Écouteurs Stéréo Sans Fil
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Casque Sans Fil
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Écouteurs Sans Fil
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Casques Sans Fil Parlants
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Écouteurs Filaire
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Haut-Parleurs Sans Fil
							</Link>
						</li>
					</ul>
				</li>
				<li className="col-3 text-decoration-none list-unstyled">
					<div className="mb-2">
						<img src="/img/dropdown/product3.jpeg" alt="" />
					</div>
					<Link to="/" className="text-decoration-none fs-4 fw-bold">
						Wearables
					</Link>
					<ul className="list-unstyled pl-3 mt-2 text-decoration-none">
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Montres intelligentes
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/" className="mb-2 text-decoration-none">
								Traqueurs d'activité
							</Link>
						</li>
					</ul>
				</li>
				<li className="col-3 text-decoration-none list-unstyled">
					<div className="mb-2">
						<img src="/img/dropdown/product4.jpeg" alt="" />
					</div>
					<Link to="/" className="text-decoration-none fs-4 fw-bold">
						Mode de Vie
					</Link>
					<ul className="list-unstyled pl-3 mt-2 text-decoration-none">
						<li className="mb-2 ">
							<Link to="/" className="text-decoration-none">
								Brosse À Dents Électrique
							</Link>
						</li>
						<li className="mb-2 ">
							<Link to="/" className="text-decoration-none">
								Rasage & Épilation
							</Link>
						</li>
						<li className="mb-2 ">
							<Link to="/" className="text-decoration-none">
								Souris & Clavier
							</Link>
						</li>
						<li className="mb-2 ">
							<Link to="/" className="text-decoration-none">
								Balance Intelligente
							</Link>
						</li>
						<li className="mb-2 ">
							<Link to="/" className="text-decoration-none">
								Aspirateur
							</Link>
						</li>
					</ul>
				</li>
			</div>
		</div>
	);
}

const Usericon = ({ user }) => {
	const hasToken = localStorage.getItem("token") !== null;
	// const isAuthenticated = user !== null;

	return (
		<>
			{hasToken ? (
				<Link to="/user" className="mx-1">
					{/* <img className="bi me-1" width="25" height="26" src="/img/user.png" alt="" /> */}
					<svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<g id="User / User_Circle">
								{" "}
								<path
									id="Vector"
									d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
									stroke="#000000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>{" "}
							</g>{" "}
						</g>
					</svg>
				</Link>
			) : (
				<Link to="/Login" className="mx-1">
					<img className="bi me-1" width="25" height="26" src="/img/user.png" alt="" />
				</Link>
			)}
		</>
	);
};

function NavBarBottom() {
	return (
		<div className="bg-gray">
			<div className="container gx-5 text-md-center">
				<div className="row">
					<div className="col-md-4">
						<img className="bi me-1" width="25" height="28" src="/img/bar_2/L.png" alt="" />
						<span className="opacity-75 fs-7">Livraison gratuite a partir de 65DHS</span>
					</div>
					<div className="col-md-4">
						<img className="bi me-1" width="25" height="28" src="/img/bar_2/D.png" alt="" />
						<span className="opacity-75 fs-7">Paiement a la Livraison</span>
					</div>
					<div className="col-md-3">
						<img className="bi me-1" width="25" height="28" src="/img/bar_2/P.png" alt="" />
						<span className="opacity-75 fs-7">Garantie sans tracas</span>
					</div>
				</div>
			</div>
		</div>
	);
}
const Serachdiv = (props) => {
	const products = props.products;
	const searchTerm = props.searchTerm;
	const filteredProducts = searchTerm ? products.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];
	return (
		<div className="bg-light w-50 z-index-1 position-absolute top-25 scrollable-div">
			{filteredProducts.map((product) => (
				<div key={product.id} className="row py-5 scrollable-div p-2">
					<div className="col-6">
						<div>
							<img src={product.image} width="300px" height="300px" alt="" />
						</div>
					</div>
					<div className="col-6">
						<h2>{product.name}</h2>
						<p>{product.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const Header = (props) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	// console.log(useAuth());
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			if (scrollTop > 0) {
				setIsScrolled(true);
				if (scrollTop > 200) {
					setDropdownOpen(false);
				}
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// const products = props.products;
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div>
			<NavBarTop />

			<div className="container-fluid py-4 bg-white text-black">
				<div className={`d-flex flex-wrap align-items-center justify-content-center bg-white ${isScrolled ? "fixed-top shadow" : ""}`}>
					<Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
						<img className="bi me-2" width="170" height="70" src="/img/logo.png" alt="" />
					</Link>

					<ul className="nav col-12 col-lg-auto me-lg-2 mb-lg-0 mb-sm-3 justify-content-center">
						<li>
							<Link to="/" className="nav-link px-3 text-black fw-bold">
								Accueil
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-link px-3 text-black fw-bold">
								Offres quotidiennes
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link className="nav-link text-black dropdown-toggle fw-bold" id="navbarDropdown" role="button" onClick={toggleDropdown}>
								Products
							</Link>
						</li>
						<li>
							<Link to="/newarrives" className="nav-link px-3 text-black fw-bold">
								Nouvel Arrivage
							</Link>
						</li>
						<li>
							<Link to="/support" className="nav-link px-3 text-black fw-bold">
								Support
							</Link>
						</li>
					</ul>

					<form className="col-lg-2 col-sm-4 col-md-4 mx-lg-2 my-3 my-lg-0 ">
						<input
							type="text"
							value={searchTerm}
							className="form-control placeholder-wave form-control-dark position-relative"
							placeholder="Search"
							aria-label="Search"
							onChange={(e) => setSearchTerm(e.target.value)}
							style={{ borderRadius: "30rem", border: "1.5px solid #cacaca" }}
						/>
					</form>
					<Serachdiv products={props.products} searchTerm={searchTerm} />
					<div className="icons ms-2">
						<Link to="/" className="mx-1">
							<img className="bi me-1" width="25" height="26" src="/img/cart.png" alt="" />
						</Link>
						<Usericon />
						<Link to="/" className="mx-1">
							<img className="bi me-1" width="25" height="26" src="/img/language.png" alt="" />
						</Link>
					</div>

					{/* <div className="text-end">
							<button type="button" className="btn btn-outline-dark me-2">
								Login
							</button>
							<button type="button" className="btn btn-warning">
								Sign-up
							</button>
						</div> */}
					<Dropdownmenu a={dropdownOpen} />
				</div>
			</div>

			{/* // nav bar 3th */}
			<NavBarBottom />
		</div>
	);
};

export default withAuth(Header);
