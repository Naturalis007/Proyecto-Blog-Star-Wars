import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<button className="btn btn-warning m-3">Volver al Home</button>
			</Link>
			<div className="ml-auto">
				<div class="btn-group dropstart">
						<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Mis Favs 🖤
						</button>
						<ul class="dropdown-menu">
							{store.favoritos.map((value,index)=>{
								return (<li key={index} className="dropdown-item">{value} </li>)
							})}
						</ul>
					</div>
			</div>
		</nav>
	);
};
