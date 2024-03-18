import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
	const links = [
		{ to: `/addPassword`, label: `Wachtwoord toevoegen` },
		{ to: `/overview`, label: `Wachtwoorden bekijken` },
		{ to: `/login`, label: `login` },
	];
	return (
		<nav>
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
