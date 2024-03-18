import React from "react";

interface ListProps {
	children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
	return <ul>{children}</ul>;
};

export default List;
