import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";
import Button from "../button/Button";

describe("Form", () => {
	it("should render the children components", () => {
		const { getByText } = render(
			<Form onSubmit={jest.fn()}>
				<Button
					action={jest.fn()}
					text="Submit"
					type="submit"
				/>
				<input type="text" />
			</Form>
		);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});
});
