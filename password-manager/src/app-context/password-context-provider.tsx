import React, { useState } from "react";
import {
	AppState,
	PasswordContext,
	PasswordWithTitle,
} from "./password-context";

interface Props {
	children: React.ReactNode;
}

export const PasswordContextProvider: React.FunctionComponent<Props> = (
	props: Props
): JSX.Element => {
	/**
	 * Using react hooks, set the default state
	 */
	const [state, setState] = useState({
		passwords: [{ title: "Benu", password: "1234" }],
		addPassword: (newPassword: PasswordWithTitle) => {
			setState({ ...state, passwords: [...state.passwords, newPassword] });
		},
	});

	/**
	 * Declare the update state method that will handle the state values
	 */
	const updateState = (newState: Partial<AppState>) => {
		setState({ ...state, ...newState });
	};

	const addPassword = (newPassword: PasswordWithTitle) => {
		setState(prevState => ({
			...prevState,
			passwords: [...prevState.passwords, newPassword],
		}));
	};

	return (
		<PasswordContext.Provider value={{ ...state, updateState, addPassword }}>
			{props.children}
		</PasswordContext.Provider>
	);
};
