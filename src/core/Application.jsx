import { BrowserRouter } from "react-router-dom";

import Title from "core/components/Title/Title";
import Navbar from "core/components/Navbar/Navbar";
import { RouterProvider } from "core/routes/RouterProvider";

const Application = () => {
	return (
		<BrowserRouter>
			<Title />
			<Navbar />
			<RouterProvider />
		</BrowserRouter>
	);
};

export default Application;
