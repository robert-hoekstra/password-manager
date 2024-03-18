import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
	it("renders correctly", () => {
		const { getByLabelText } = render(
			<Input
				value=""
				onChange={() => {}}
			/>
		);
		const inputElement = screen.getByLabelText("input");
		expect(inputElement).toBeInTheDocument();
	});

	it("calls onChange callback when input value changes", () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(
			<Input
				value=""
				onChange={handleChange}
			/>
		);
		const inputElement = screen.getByLabelText("input");
		fireEvent.change(inputElement, { target: { value: "test" } });
		expect(handleChange).toHaveBeenCalledWith("test");
	});

	it("toggles password visibility when show/hide button is clicked", () => {
		const { getByLabelText, getByText } = render(
			<Input
				value=""
				onChange={() => {}}
				isPassword={true}
			/>
		);
		const inputElement = screen.getByLabelText("input");
		const showHideButton = screen.getByText("Show");
		fireEvent.click(showHideButton);
		expect(inputElement.getAttribute("type")).toBe("text");
		fireEvent.click(showHideButton);
		expect(inputElement.getAttribute("type")).toBe("password");
	});
});

export {};
