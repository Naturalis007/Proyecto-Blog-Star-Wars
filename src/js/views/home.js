import React from "react";
import { Card } from "../component/card";



import "../../styles/home.css";

export const Home = () => (
	<div>
		<Card ruta="/personajes/" titulo="Personajes" descripcion="Aqui podrás revisar toda la info de los personajes"/>
		<Card ruta="/planetas/"  titulo="Planetas" descripcion="Aqui podrás revisar toda la info de los planetas"/>
	</div>

);
