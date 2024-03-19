import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
	test("renders navigation links correctly", () => {
		render(
			<MemoryRouter>
				<Navigation />
			</MemoryRouter>
		);

		const addPasswordLink = screen.getByText("Wachtwoord toevoegen");
		const overviewLink = screen.getByText("Wachtwoorden bekijken");

		expect(addPasswordLink).toBeInTheDocument();
		expect(overviewLink).toBeInTheDocument();
	});

	test("navigates to the correct routes when links are clicked", () => {
		render(
			<MemoryRouter>
				<Navigation />
			</MemoryRouter>
		);

		const addPasswordLink = screen.getByText("Wachtwoord toevoegen");
		const overviewLink = screen.getByText("Wachtwoorden bekijken");

		expect(addPasswordLink).toHaveAttribute("href", "/addPassword");
		expect(overviewLink).toHaveAttribute("href", "/overview");
	});
});
