import React, { useContext } from "react";
import Input from "../../components/input/Input";
import Form from "../../components/form/Form";
import { PasswordContext } from "../../app-context/password-context";
import Navigation from "../../components/navigation/Navigation";
import OptionSelector from "../../components/optionSelector/OptionSelector";

const AddPasswordPage: React.FC = () => {
	const [title, setTitle] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [client, setClient] = React.useState("");

	const { addPassword } = useContext(PasswordContext);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addPassword({ title, password, client });
	};

	const clients = [
		"Payroll Select",
		"Benu Direct",
		"Schotpoort Connect",
		"KNHB",
	];
	return (
		<div className="AddPasswordPage">
			<Navigation />
			<h1>Voeg een nieuw wachtwoord toe</h1>
			<p>Op deze pagina kun je een nieuw wachtwoord toevoegen.</p>
			<Form onSubmit={handleSubmit}>
				<label htmlFor="title">Geef jouw wachtwoord een titel</label>
				<Input
					required={true}
					id="title"
					placeholder="Bijv: Master Wachtwoord"
					value={title}
					onChange={function (value: string): void {
						setTitle(value);
					}}
				/>
				<label htmlFor="password">Een sterk wachtwoord</label>
				<Input
					required={true}
					id="password"
					placeholder="Bijv: 1234Abc!@#"
					isPassword
					value={password}
					onChange={function (value: string): void {
						setPassword(value);
					}}
				/>
				<OptionSelector
					onChange={setClient}
					options={clients}
				/>
			</Form>
		</div>
	);
};

export default AddPasswordPage;
