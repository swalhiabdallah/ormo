import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import withAuth from "./withAuth";
import User from "./user";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://127.0.0.1:8000/api/login", {
				email: email,
				password: password,
			})
			.then((response) => {
				const user = response.data;
				const token = user.token;
				localStorage.setItem("token", token);
				navigate("/user");
			})
			.catch((error) => {
				console.log(error.response.data);
			});

		// remove Auth Logout
		// ocalStorage.removeItem('token');

		// after auth :
		// const token = localStorage.getItem("token");

		// axios
		// 	.get("/protected", {
		// 		headers: {
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	})
		// 	.then((response) => {
		// 		console.log(response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error.response.data);
		// 	});
	};
	return (
		<div className="container my-5 py-5">
			<p className="text-center fw-bold fs-4">Accese client</p>
			<br />
			<div className="row mt-5">
				<form className="col-6" onSubmit={handleSubmit}>
					<p className="fw-bold fs-4 ">Clients enregistrés</p>
					<hr className="mb-5 w-85" />
					<div className="w-85 content-center">
						{/* <!-- Email input --> */}
						<p className="mb-5">Si vous avez un compte, connectez-vous avec votre adresse email.</p>
						<div className="form-outline mb-4">
							<label className="form-label" htmlFor="email">
								Email address
								<span className="text-danger"> *</span>
							</label>
							<input type="email" className="form-control" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
						</div>

						{/* <!-- Password input --> */}
						<div className="form-outline mb-4">
							<label className="form-label" htmlFor="password">
								Mote de passe
								<span className="text-danger"> *</span>
							</label>
							<input type="password" className="form-control" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
						</div>

						{/* <!-- 2 column grid layout for inline styling --> */}
						<div className="row mb-4">
							<div className="col d-flex justify-content-center">
								{/* <!-- Checkbox --> */}
								<div className="form-check">
									<label className="form-check-label" htmlFor="Rememberme">
										{" "}
										Remember me{" "}
									</label>
									<input className="form-check-input" type="checkbox" checked={remember} id="Rememberme" onChange={(event) => setRemember(event.target.value)} />
								</div>
							</div>

							<div className="col">
								{/* <!-- Simple link --> */}
								<a href="#!">Forgot password?</a>
							</div>
						</div>

						{/* <!-- Submit button --> */}
						<button type="submit" className="btn btn-success btn-block mb-4">
							Connexion
						</button>
						<p className="text-danger">* Champs requis</p>

						{/* <!-- Register buttons --> */}
						<div className="text-center">
							<p>
								Not a member?
								<Link to="/register">
									<span className=""> Créer un compte</span>
								</Link>
							</p>
							{/* <p>or sign up with:</p>
							<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-facebook-f"></i>
							</button>
							
							<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-google"></i>
							</button>
							
							<button type="button" className="btn btn-link btn-floating mx-1">
								<i className="fab fa-twitter"></i>
								</button>
								
								<button type="button" className="btn btn-link btn-floating mx-1">
								<i className="fab fa-github"></i>
							</button> */}
						</div>
					</div>
				</form>
				<div className="col-6 ps-5">
					<p className="fw-bold fs-4">Nouveaux clients</p>
					<hr className="mb-5 w-90" />

					<p className="w-90">La création d’un compte a de nombreux avantages : consultation rapide, sauvegarder plusieurs adresses, suivre les commandes, et bien plus encore.</p>
					<Link to="/register">
						<button type="button" className="btn btn-success btn-block mb-4">
							Créer un compte
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

// const Login = ({ user }) => {
// 	const isAuthenticated = user !== null;
// 	const hasToken = localStorage.getItem("token") !== null;
// 	return <div>{hasToken && isAuthenticated ? <User /> : <LoginForm />}</div>;
// };

const Login = ({ user }) => {
	// const [isLoading, setIsLoading] = useState(true);
	const hasToken = localStorage.getItem("token") !== null;
	const isAuthenticated = user !== null;

	// useEffect(() => {
	// 	// Simulate authentication process
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 2000);
	// }, []);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return <div>{hasToken ? isAuthenticated ? <User /> : <LoginForm /> : <LoginForm />}</div>;
};
export default withAuth(Login);
