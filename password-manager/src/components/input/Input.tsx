import React, { useState } from "react";
import Button from "../button/Button";
import "./Input.css";

export interface InputProps {
	value: string;
	onChange: (value: string) => void;
	isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
	value,
	onChange,
	isPassword,
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className="input-container">
			<input
				type={isPassword && !showPassword ? "password" : "text"}
				value={value}
				onChange={handleChange}
			/>
			{isPassword && (
				<Button
					type="button"
					action={() => setShowPassword(!showPassword)}
					text={showPassword ? "Hide" : "Show"}
				/>
			)}
		</div>
	);
};

export default Input;
