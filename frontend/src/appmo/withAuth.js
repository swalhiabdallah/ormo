// import React from "react";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
// 	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

// 	React.useEffect(() => {
// 		const authStatus = localStorage.getItem("auth");
// 		setIsAuthenticated(!!authStatus); // convert string to boolean
// 	}, []);

// 	return isAuthenticated;
// };

// const User = () => {
// 	const navigate = useNavigate();
// 	const isAuthenticated = useAuth();

// 	if (!isAuthenticated) {
// 		navigate("/login");
// 	}

// 	return (
// 		<div>
// 			<h1>This is a protected page</h1>
// 			<p>Only authenticated users can see this.</p>
// 		</div>
// 	);
// };

// export default User;

import React, { useState, useEffect } from "react";
import axios from "axios";

const withAuth = (WrappedComponent) => {
	const Auth = (props) => {
		const [user, setUser] = useState(null);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			const token = localStorage.getItem("token");
			if (token) {
				axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				axios
					.get("http://127.0.0.1:8000/api/user")
					.then((response) => setUser(response.data))
					.catch((error) => console.error(error));
			} else {
				setUser(null);
			}
			setLoading(false);
		}, []);

		if (loading) return <p>Loading...</p>;

		return <WrappedComponent {...props} user={user} />;
	};

	return Auth;
};

export default withAuth;
