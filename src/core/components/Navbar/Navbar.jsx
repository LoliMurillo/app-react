import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<header>
				<h1 className="Title">Relaciona/Tea</h1>
				<nav>
					<ul>
						<li>
							<Link to={"/"}>Inicio</Link>
						</li>
						<li>
							<Link to={"/profile"}>Perfil</Link>
						</li>
					</ul>
				</nav>
				<Link className="navbar-access" to={"/Login"}>
					Inicia sesión
				</Link>
				<Link className="about-us" to={"/About"}>
					Sobre Nosotros
				</Link>
			</header>
		</div>
	);
};
export default Navbar;
