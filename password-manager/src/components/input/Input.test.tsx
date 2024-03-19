import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
	it("renders correctly", () => {
		const onChange = jest.fn();
		const { getByPlaceholderText } = render(
			<Input
				id="test-input"
				value=""
				onChange={onChange}
				placeholder="Enter value"
			/>
		);

		const inputElement = screen.getByPlaceholderText("Enter value");
		expect(inputElement).toBeInTheDocument();
	});

	it("calls onChange callback when input value changes", () => {
		const onChange = jest.fn();
		const { getByPlaceholderText } = render(
			<Input
				id="test-input"
				value=""
				onChange={onChange}
				placeholder="Enter value"
			/>
		);

		const inputElement = screen.getByPlaceholderText("Enter value");
		fireEvent.change(inputElement, { target: { value: "Test value" } });

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith("Test value");
	});

	it("toggles password visibility when show/hide button is clicked", () => {
		const onChange = jest.fn();
		const { getByText, getByLabelText } = render(
			<Input
				id="test-input"
				value=""
				onChange={onChange}
				placeholder="Enter password"
				isPassword
			/>
		);
		const inputElement = screen.getByPlaceholderText("Enter password");
		const showHideButton = screen.getByText("Show");

		fireEvent.click(showHideButton);
		expect(inputElement.type).toBe("text");

		fireEvent.click(showHideButton);
		expect(inputElement.type).toBe("password");
	});
});
