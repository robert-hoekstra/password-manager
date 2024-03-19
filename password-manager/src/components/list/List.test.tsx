import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
	it("renders children correctly", () => {
		const { getByText } = render(
			<List>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</List>
		);

		expect(screen.getByText("Item 1")).toBeInTheDocument();
		expect(screen.getByText("Item 2")).toBeInTheDocument();
		expect(screen.getByText("Item 3")).toBeInTheDocument();
	});
});
