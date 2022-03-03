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
							<Link to={"profile"}>Perfil</Link>
						</li>
						<li>
							<Link className="about" to={"about"}>
								Sobre Nosotros
							</Link>
						</li>
					</ul>
				</nav>

				<nav>
					<ul>
						<li>
							<Link className="form-register" to={"register"}>
							Regístrate
							</Link>
						</li>
						<li>
							<Link className="navbar-access" to={"login"}>
							Inicia sesión
							</Link>
						</li>
					</ul>
				</nav>		
				
			</header>
		</div>
	);
};

export default Navbar;
