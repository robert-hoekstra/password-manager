import React from "react";

interface ListItemProps {
	text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
	return <li>{text}</li>;
};
