import HomePage from "core/pages/HomePage";
import { UserProfilePage } from "user/pages/UserProfilePage";
import { Layout } from "core/components/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "core/components/Login/Login";
import About from "core/pages/About";
import Form from "core/components/Form/Form";

export const RouterProvider = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="profile" element={<UserProfilePage />} />
				<Route path="login" element={<Login />} />
				<Route path="about" element={<About />} />
				<Route path="form" element={<Form />} />
			</Routes>
		</Layout>
	);
};
