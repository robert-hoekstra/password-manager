import React, { useState, useEffect } from "react";
import {
	PasswordContext,
	PasswordWithTitle,
	AppState,
} from "./password-context";

interface Props {
	children: React.ReactNode;
}

export const PasswordContextProvider: React.FunctionComponent<Props> = (
	props: Props
): JSX.Element => {
	const initialState: AppState = JSON.parse(
		localStorage.getItem("passwordContextState") ||
			'{"passwords":[{"title":"PlaceholderTitle","password":"PlaceholderPassword"}]}'
	);

	const [state, setState] = useState(initialState);

	useEffect(() => {
		localStorage.setItem("passwordContextState", JSON.stringify(state));
	}, [state]);

	const updateState = (newState: Partial<AppState>) => {
		setState(prevState => ({ ...prevState, ...newState }));
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
