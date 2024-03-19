import React from "react";

export interface ListProps {
	children?: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
	return <ul>{children}</ul>;
};

export default List;
