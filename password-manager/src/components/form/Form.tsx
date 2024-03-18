import React, { ReactNode } from "react";
import Button from "../button/Button";

export type FormProps = {
	children: ReactNode;
	onSubmit: (event: React.FormEvent) => void; // Update the onSubmit prop to accept an event parameter
};

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(event); // Pass the event parameter to the onSubmit function
	};

	return (
		<form onSubmit={handleSubmit}>
			{children}

			<Button
				action={onSubmit}
				text="Submit"
				type="submit"
			/>
		</form>
	);
};

export default Form;
