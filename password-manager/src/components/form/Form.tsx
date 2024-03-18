import React, { ReactNode } from "react";
import Button from "../button/Button";

type FormProps = {
	children: ReactNode;
	onSubmit: () => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit();
	};

	return (
		<form onSubmit={handleSubmit}>
			{children}
			<button type="submit">Submit</button>
			<Button
				action={onSubmit}
				text="Submit"
				type="submit"
			/>
		</form>
	);
};

export default Form;
