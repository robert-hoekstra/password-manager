import React from "react";

export interface UserProfile {
	id?: number;
	username?: string;
	firstName?: string;
	email?: string;
}

export interface PasswordWithTitle {
	title: string;
	password: string;
}

export interface AppState {
	user?: UserProfile;
	passwords: PasswordWithTitle[];
	updateState: (newState: Partial<AppState>) => void;
	addPassword: (newPassword: PasswordWithTitle) => void;
}

const defaultState: AppState = {
	user: {},
	passwords: [],
	updateState: (newState?: Partial<AppState>) => {},
	addPassword: (newPassword?: PasswordWithTitle) => {},
};

export const PasswordContext = React.createContext<AppState>(defaultState);
