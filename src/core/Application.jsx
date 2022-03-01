import { BrowserRouter } from "react-router-dom";

import Navbar from "core/components/Navbar/Navbar";
import { RouterProvider } from "core/routes/RouterProvider";
import "core/sanitize/reset.css";
import { Layout } from "./components/Layout";

const Application = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Layout>
				<RouterProvider />
			</Layout>
		</BrowserRouter>
	);
};

export default Application;
