import React from "react";
// import { Link } from "react-router-dom";
import withAuth from "./withAuth";

const Profile = (props) => {
	return (
		<div className="container">
			<div className="row my-5">
				<div className="col-4 justify-content-center d-flex">
					<div className="bg-dark text-center p-5 w-100">
						<img src="" width="100px" height="100px" alt="" />
						<h1 className="text-light">{props.name}</h1>
					</div>
				</div>
				<div className="col-7">
					<p className="bg-info w-100 p-3"> Profile :</p>
					<div className="ms-5">
						<span className="d-block">
							<p className="mx-2">
								Name :<span className="mx-2">{props.name}</span>
							</p>
						</span>
						<span className="d-block">
							<p className="mx-2">
								Email :<span className="mx-2">{props.email}</span>
							</p>
						</span>
					</div>
					<p className="mt-5 bg-info w-25 p-3"> Orders :</p>
				</div>
			</div>
		</div>
	);
};

const MyComponent = ({ user }) => {
	const hasToken = localStorage.getItem("token") !== null;
	// const isAuthenticated = user !== null;

	return (
		<div>
			<div>{hasToken ? "" : <div>You need to log in first.</div>}</div>
			{user ? (
				<div>
					<p></p>
					<Profile name={user.name} email={user.email} />
					{console.log(user)}
				</div>
			) : (
				""
			)}
			{/* Your component code here */}
			{/* {console.log(user)} */}
		</div>
	);
};

export default withAuth(MyComponent);
