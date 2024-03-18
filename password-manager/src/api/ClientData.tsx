import React, { useEffect, useState } from "react";

const ClientData: React.FC = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://pastebin.com/raw/zSFTiVWr");
				const jsonData = await response.json();
				setData(jsonData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{console.log(data)}
			<div>{JSON.stringify(data)}</div>
		</>
	);
};

export default ClientData;
