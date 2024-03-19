import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation: React.FC = () => {
	const links = [
		{ to: `/addPassword`, label: `Wachtwoord toevoegen` },
		{ to: `/overview`, label: `Wachtwoorden bekijken` },
	];
	return (
		<nav className="navigation">
			<ul>
				{links.map((link, index) => (
					<li key={link.label}>
						<Link to={link.to}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
