import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<header>
				<h1 className="Title">Relaciona/Tea</h1>
				<nav>
					<label htmlFor="drop" className="toggle">
						<span>&#9776;</span>
					</label>
					<input type="checkbox" id="drop" />
					<ul className="menu">
						<li>
							<Link to={"/"}>Inicio</Link>
						</li>
						<li>
							<Link to={"/profile"}>Perfil</Link>
						</li>
						<li>
							<Link className="form-register" to={"/signup"}>
								Regístrate
							</Link>
						</li>
						<li>
							<Link className="navbar-access" to={"/signin"}>
								Inicia sesión
							</Link>
						</li>
						<li>
							<Link className="about-us" to={"/about"}>
								Sobre Nosotros
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
export default Navbar;
