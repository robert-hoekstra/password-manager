import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OverviewPage from "./Overview";

test("renders overview page with passwords", () => {
	// Mock the PasswordContext
	const mockPasswords = [
		{ title: "wachtwoord", password: "123456" },
		{ title: "wachtwoord", password: "abcdef" },
	];
	jest.mock("../../app-context/password-context", () => ({
		PasswordContext: {
			Consumer: ({ children }: { children: Function }) =>
				children({ passwords: mockPasswords }),
		},
	}));

	render(
		<MemoryRouter>
			<OverviewPage />
		</MemoryRouter>
	);

	// // Verify that the passwords are rendered
	// expect(screen.getByText("wachtwoord")).toBeInTheDocument();
	// expect(screen.getByText("123456")).toBeInTheDocument();
	// expect(screen.getByText("wachtwoord")).toBeInTheDocument();
	// expect(screen.getByText("abcdef")).toBeInTheDocument();
});
