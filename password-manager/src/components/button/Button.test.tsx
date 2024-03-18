import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
	it("should call the action function when clicked", () => {
		const mockAction = jest.fn();
		const buttonText = "Click me";
		const { getByText } = render(
			<Button
				action={mockAction}
				text={buttonText}
			/>
		);
		const button = getByText(buttonText);
		fireEvent.click(button);
		expect(mockAction).toHaveBeenCalled();
	});
});
