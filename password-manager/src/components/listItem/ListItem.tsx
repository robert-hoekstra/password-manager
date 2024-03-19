import React from "react";
import "./ListItem.css";

export interface ListItemProps {
	text: string;
}

export const ListItem: React.FC<ListItemProps> = ({ text }) => {
	return <li>{text}</li>;
};
