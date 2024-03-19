import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import OptionSelector, { OptionSelectorProps } from "./OptionSelector";

describe("OptionSelector", () => {
	const options: string[] = ["Option 1", "Option 2", "Option 3"];
	const onChangeMock = jest.fn();

	const renderComponent = (props: Partial<OptionSelectorProps> = {}) => {
		const defaultProps: OptionSelectorProps = {
			options,
			onChange: onChangeMock,
		};
		return render(
			<OptionSelector
				{...defaultProps}
				{...props}
			/>
		);
	};

	it("renders the options correctly", () => {
		const { getByText } = renderComponent();
		options.forEach(option => {
			expect(screen.getByText(option)).toBeInTheDocument();
		});
	});
});
