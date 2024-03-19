import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
	const mockAction = jest.fn();
	const buttonText = "Click me";

	it("renders the button correctly", () => {
		const { getByText } = render(
			<Button
				action={mockAction}
				text={buttonText}
				type="button"
			/>
		);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toBeInTheDocument();
	});

	it("calls the action function when clicked", () => {
		const { getByText } = render(
			<Button
				action={mockAction}
				text={buttonText}
				type="button"
			/>
		);
		const buttonElement = screen.getByText(buttonText);
		fireEvent.click(buttonElement);
		expect(mockAction).toHaveBeenCalled();
	});
});
