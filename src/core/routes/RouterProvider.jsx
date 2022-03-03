import { Routes, Route } from "react-router-dom";
import HomePage from "core/pages/HomePage";
import { SignUp } from "core/pages/SignUp";
import { SignIn } from "core/pages/SignIn";
import { Layout } from "core/components/Layout";
import { UserProfilePage } from "user/pages/UserProfilePage";
import AboutPage from "about-us/pages/AboutPage";

export const RouterProvider = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="register" element={<SignUp />} />
				<Route path="login" element={<SignIn />} />
				<Route path="profile" element={<UserProfilePage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</Layout>
	);
};
