import { Link } from "react-router-dom";
import "./Navbar.css";
import Grid from "../Grid";

const Navbar = () => {
	return (
		<Grid>
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
					<Link className="form-register" to={"/form"}>
						Regístrate
					</Link>
					<Link className="navbar-access" to={"/login"}>
						Inicia sesión
					</Link>
					<Link className="about-us" to={"/about"}>
						Sobre Nosotros
					</Link>
				</header>
			</div>
		</Grid>
	);
};
export default Navbar;
