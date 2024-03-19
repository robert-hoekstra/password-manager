import React, { useContext } from "react";
import Input from "../../components/input/Input";
import Form from "../../components/form/Form";
import { PasswordContext } from "../../app-context/password-context";

const AddPasswordPage: React.FC = () => {
	const [title, setTitle] = React.useState("");
	const [password, setPassword] = React.useState("");

	const { addPassword } = useContext(PasswordContext);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addPassword({ title, password });
	};

	return (
		<div className="AddPasswordPage">
			<h1>Voeg een nieuw wachtwoord toe</h1>
			<Form onSubmit={handleSubmit}>
				<label htmlFor="title">Geef jouw wachtwoord een titel</label>
				<Input
					id="title"
					placeholder="Bijv: Benu"
					value={title}
					onChange={function (value: string): void {
						setTitle(value);
					}}
				/>
				<label htmlFor="password">Een sterk wachtwoord</label>
				<Input
					id="password"
					placeholder="Dus niet 1234 of wachtwoord1234!"
					isPassword
					value={password}
					onChange={function (value: string): void {
						setPassword(value);
					}}
				/>
			</Form>
		</div>
	);
};

export default AddPasswordPage;
