// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Overview from "./pages/overview/Overview";
import AddPassword from "./pages/addPassword/AddPassword";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					Component={Login}
				/>
				<Route
					path="/overview"
					Component={Overview}
				/>
				<Route
					path="/addPassword"
					Component={AddPassword}
				/>
			</Routes>
		</Router>
	);
};

export default AppRouter;
