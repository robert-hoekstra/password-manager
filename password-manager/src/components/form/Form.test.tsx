import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
	it("should call onSubmit when form is submitted", () => {
		const onSubmit = jest.fn();
		const { getByText } = render(
			<Form onSubmit={onSubmit}>
				<input type="text" />
				<button type="submit">Submit</button>
			</Form>
		);

		fireEvent.click(getByText("Submit"));

		expect(onSubmit).toHaveBeenCalled();
	});
});

export {};