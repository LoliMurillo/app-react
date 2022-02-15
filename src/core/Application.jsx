import { BrowserRouter } from "react-router-dom";

import Navbar from "core/components/Navbar/Navbar";
import { RouterProvider } from "core/routes/RouterProvider";
import "core/sanitize/reset.css";

const Application = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<RouterProvider />
		</BrowserRouter>
	);
};

export default Application;
