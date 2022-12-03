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
    <Link to = {props.ruta} ><a className="btn btn-primary">Ir a {props.titulo} </a></Link>
  </div>
</div>
)
};

export const ListadoCard = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>    
    )
}