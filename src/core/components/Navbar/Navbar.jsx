import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<header>
				<h1>Relaciona/Tea</h1>
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
				<div className="navbar-access">Acceso</div>
			</header>
		</div>
	);
};
export default Navbar;
