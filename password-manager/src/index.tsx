import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PasswordContextProvider } from "./app-context/password-context-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./pages/404/404";
import AddPasswordPage from "./pages/addPassword/AddPassword";
import OverviewPage from "./pages/overview/Overview";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/addPassword",
		element: <AddPasswordPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/overview",
		element: <OverviewPage />,
		errorElement: <NotFoundPage />,
	},
]);
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<PasswordContextProvider>
			<RouterProvider router={router} />
		</PasswordContextProvider>
	</React.StrictMode>
);
