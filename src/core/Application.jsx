import Title from "core/componentsLogin/Title/Title";
import Login from "core/componentsLogin/Login/Login";
import Navbar from "core/componentsLogin/Navbar/Navbar";
import HomePage from "pages/home/HomePage";

const Application = () => {
	return (
		<div>
			<Title />
			<Login />
			<Navbar />
			<HomePage />
		</div>
	);
};

export default Application;
