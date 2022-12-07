import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
    return ( 
    <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.titulo} </h5>
    <p className="card-text">{props.descripcion} </p>
    <Link to = {props.ruta} ><a className="btn btn-warning">Ir a {props.titulo} </a></Link>
  </div>
</div>
)
};

export const ListadoCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://es.rollingstone.com/wp-content/uploads/2021/05/20-perosnajes-star-wars.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo} </h5>
                <p className="card-text">{props.descripcion} </p>
                <Link to = {props.ruta} > <a href="#" className="btn btn-primary">Go somewhere</a> </Link>
            </div>
        </div>    
    )
}