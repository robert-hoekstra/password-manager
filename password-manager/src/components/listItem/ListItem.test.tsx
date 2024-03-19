import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItem } from "./ListItem";

describe("ListItem", () => {
	it("renders the text prop correctly", () => {
		const text = "Example Text";
		const { getByText } = render(<ListItem text={text} />);
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
