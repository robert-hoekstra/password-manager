import React from "react";
import "./Button.css";

export interface ButtonProps {
	action: (e: React.MouseEvent) => void;
	text: string;
	type: "button" | "submit" | "reset";
}

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
