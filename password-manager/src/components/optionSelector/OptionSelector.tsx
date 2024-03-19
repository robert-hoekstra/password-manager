import React, { ChangeEvent } from "react";

export interface OptionSelectorProps {
	options: string[];
	onChange: (selectedOption: string) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
	options,
	onChange,
}) => {
	const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		onChange(selectedOption);
	};

	return (
		<div>
			<select onChange={handleOptionChange}>
				<option value="noClient">Geen klant</option>
				{options.map((option, index) => (
					<option
						key={index}
						value={option}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default OptionSelector;
