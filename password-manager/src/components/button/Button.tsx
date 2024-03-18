import React from "react";
import "./Button.css";

type ButtonProps = {
	action: () => void;
	text: string;
	type: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ action, text }) => {
	return (
		<button
			className="button"
			onClick={action}
		>
			{text}
		</button>
	);
};

export default Button;
