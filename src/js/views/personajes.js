import React from "react";
import { Link } from "react-router-dom";
import { ListadoCard } from "../component/card";

export const Personajes = () => ( 
  <div className="container text-center">
      <div className="row">
          <div className="col">
              <ListadoCard 
                  titulo="Nombre del personaje"
                  descripcion="Caracteristicas del personaje"
                  boton="Quiero saber +" />
          </div>
          <div className="col">
              <ListadoCard 
                  titulo="Nombre del personaje"
                  descripcion="Caracteristicas del personaje"
                  boton="Quiero saber +" />
          </div>
          <div className="col">
              <ListadoCard 
                  titulo="Nombre del personaje"
                  descripcion="Caracteristicas del personaje"
                  boton="Quiero saber +" />
          </div>
          <div className="col">
              <ListadoCard 
                  titulo="Nombre del personaje"
                  descripcion="Caracteristicas del personaje"
                  boton="Quiero saber +" />
          </div>
        </div>  
  </div>
)