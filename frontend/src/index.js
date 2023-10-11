import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from "./dashboard/Dash";
// import reportWebVitals from "./reportWebVitals";

axios
	.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
	.then((response) => {
		// CSRF token is now stored in cookies
		axios.defaults.headers.common["X-CSRF-TOKEN"] = response.data.csrfToken; // Set CSRF token as default header
	})
	.catch((error) => {
		console.log(error);
	});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<>
		<App />
	</>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
