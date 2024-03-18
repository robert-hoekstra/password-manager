import React from "react";

export interface ListItemProps {
	text: string;
}

export const ListItem: React.FC<ListItemProps> = ({ text }) => {
	return <li>{text}</li>;
};
