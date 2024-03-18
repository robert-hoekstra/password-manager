import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
	it("renders a list with children", () => {
		const children = (
			<>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</>
		);

		const { getByRole } = render(<List>{children}</List>);
		const listElement = getByRole("list");

		expect(listElement).toBeInTheDocument();
		expect(listElement.children.length).toBe(3);
	});
});

export {};
