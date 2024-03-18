import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "./404";

test("renders 404 page correctly", () => {
	render(<NotFoundPage />);
	const headingElement = screen.getByText(/404 - Page Not Found/i);
	const paragraphElement = screen.getByText(
		/The page you are looking for does not exist./i
	);
	expect(headingElement).toBeInTheDocument();
	expect(paragraphElement).toBeInTheDocument();
});
