import React, { useContext } from "react";
import "./Overview.css";
import Navigation from "../../components/navigation/Navigation";
import { PasswordContext } from "../../app-context/password-context";

const OverviewPage: React.FC = () => {
	const { passwords } = useContext(PasswordContext);
	return (
		<div className="App">
			<Navigation />
			<header className="App-header">
				<h1>Overview page</h1>
				<ul>
					{passwords.map((password, index) => (
						<li key={index}>
							<h2>{password.title}</h2>
							<p>{password.password}</p>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};

export default OverviewPage;
