import "./Navbar.css";

const Navbar = () => {
	return (
		<div>
			<header>
				<h1>Relaciona/Tea</h1>
				<nav>
					<ul>
						<li>
							<a href="/">Inicio</a>
						</li>
						<li>
							<a href="/profile">Perfil</a>
						</li>
					</ul>
				</nav>
				<div className="navbar-access">Acceso</div>
			</header>
		</div>
	);
};
export default Navbar;
