import HomePage from "core/pages/homepage/HomePage";
import { UserProfilePage } from "user/pages/UserProfilePage";
import { Layout } from "core/components/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "core/pages/about/About";
import { SignIn } from "core/pages/SignIn";
import { SignUp } from "core/pages/SignUp";

export const RouterProvider = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="profile" element={<UserProfilePage />} />
				<Route path="about" element={<About />} />
				<Route path="signin" element={<SignIn />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</Layout>
	);
};
