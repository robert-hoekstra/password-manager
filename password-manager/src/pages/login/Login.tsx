import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Login Page</h1>
				<form>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
					/>

					<button type="submit">Login</button>
					<Link to="/addPassword">
						<button type="button">Click Me!</button>
					</Link>
				</form>
			</header>
		</div>
	);
};

export default LoginPage;
