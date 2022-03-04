import { BrowserRouter } from "react-router-dom";
import Title from "core/components/Title/Title";
import Navbar from "core/components/Navbar/Navbar";
import { RouterProvider } from "./routes/RouterProvider";
import "core/sanitize/reset.css";
import { Form } from "./components/Form/Form";
import { Layout } from "./components/Layout";

const Application = () => {
	return (
		<BrowserRouter>
			<Title />
			<Navbar />
			<Form />
			<Layout>
				<RouterProvider />
			</Layout>
		</BrowserRouter>
	);
};

export default Application;
