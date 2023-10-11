import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setpassword_confirmation] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://127.0.0.1:8000/api/register", {
				name: name,
				email: email,
				password: password,
				password_confirmation: password_confirmation,
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
	};

	return (
		<div className="container my-5 py-5 d-flex justify-content-center align-items-center">
			<form className="w-50" onSubmit={handleSubmit}>
				<p className="fw-bold fs-4 ">Clients register</p>
				<hr className="mb-5 w-85" />
				<div className="w-85 content-center">
					<p className="mb-5">
						Si vous no avez un compte, creer vous votre compte enter votre
						<br /> nom, prenom, adresse email et votre passoword c'est facile.
						<br /> La création d’un compte a de nombreux avantages.
					</p>
					{/* <!-- Email input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="name">
							nom
							<span className="text-danger"> *</span>
						</label>
						<input type="text" className="form-control" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
					</div>

					{/* <!-- Email input --> */}
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

					{/* <!-- Password input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="password_confirmation">
							Mote de passe confirmation
							<span className="text-danger"> *</span>
						</label>
						<input
							type="password"
							className="form-control"
							id="password_confirmation"
							name="password_confirmation"
							value={password_confirmation}
							onChange={(event) => setpassword_confirmation(event.target.value)}
						/>
					</div>

					{/* <!-- 2 column grid layout for inline styling --> */}
					<div className="row mb-4">
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
							<Link to="/">
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
		</div>
	);
};

export default Register;
