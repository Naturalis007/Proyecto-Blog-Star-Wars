import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<button className="btn btn-warning m-3">Volver al Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning m-3">Mis Favs 🖤</button>
				</Link>
			</div>
		</nav>
	);
};
