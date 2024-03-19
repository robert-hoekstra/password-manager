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
				{passwords.length > 0 ? (
					<ul>
						{passwords.map((password, index) => (
							<li
								className={
									password.client
										? password.client.replaceAll(" ", "-").toLowerCase()
										: "default"
								}
								key={index}
							>
								<h2>{password.title}</h2>
								<p>{password.password}</p>
							</li>
						))}
					</ul>
				) : (
					<p>Please add a password.</p>
				)}
			</header>
		</div>
	);
};

export default OverviewPage;
