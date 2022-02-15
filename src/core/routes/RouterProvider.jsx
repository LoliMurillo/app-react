import {
	Routes,
	Route
} from "react-router-dom";

import { HomePage } from "core/pages/HomePage";
import { UserProfilePage } from "user/pages/UserProfilePage";

export const RouterProvider = () => {
	return (
		<Routes>
			<Route path="/" element={< HomePage />} />
			<Route path="profile" element={<UserProfilePage /> } />
		</Routes>
	);
};
