// utils/auth.js

export const isAuthenticated = () => {
	// Check if user is authenticated (e.g., check token or session)
	// Example:
	return localStorage.getItem("token") !== null;
};
