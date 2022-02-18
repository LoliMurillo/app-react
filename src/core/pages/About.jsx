import { Link } from "react-router-dom";
import "./About.css";
import ImagenRo from "./img/ImagenRo.jpg";

const About = () => {
	return (
		<div className="div-about">
			<h3>Rosario Caro</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
				reiciendis dolorum deleniti illum numquam optio repudiandae quia est
				facilis repellendus, doloribus cupiditate, pariatur obcaecati quam ea.
				Tenetur explicabo minus quam.
			</p>

			<img src={ImagenRo} alt="" />
		</div>
	);
};

export default About;
