import React, { useEffect, useState } from "react";

const ClientData: React.FC = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://pastebin.com/raw/zSFTiVWr", {
					mode: "cors",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Credentials": "true",
						"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
						"Access-Control-Allow-Headers":
							"Content-Type, Authorization, X-Requested-With",
					},
				});
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
			<div>{JSON.stringify(data)}</div>
		</>
	);
};

export default ClientData;
