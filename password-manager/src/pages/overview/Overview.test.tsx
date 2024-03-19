import React from "react";
import { render, screen } from "@testing-library/react";
import OverviewPage from "./Overview";

test("renders overview page with passwords", () => {
	// Mock the PasswordContext
	const mockPasswords = [
		{ title: "Password 1", password: "123456" },
		{ title: "Password 2", password: "abcdef" },
	];
	jest.mock("../../app-context/password-context", () => ({
		PasswordContext: {
			Consumer: ({ children }: { children: Function }) =>
				children({ passwords: mockPasswords }),
		},
	}));

	// Render the component
	render(<OverviewPage />);

	// Verify that the passwords are rendered
	expect(screen.getByText("Password 1")).toBeInTheDocument();
	expect(screen.getByText("123456")).toBeInTheDocument();
	expect(screen.getByText("Password 2")).toBeInTheDocument();
	expect(screen.getByText("abcdef")).toBeInTheDocument();
});
