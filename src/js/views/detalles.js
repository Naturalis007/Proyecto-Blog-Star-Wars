import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { object } from "prop-types";
import { DetalleCard } from "../component/card";

//retornar detalles de los planetas//
export const DetallePlanetas = (props)=> {

    const {id} = useParams();
    const [planeta, setPlaneta] = useState({});

    useEffect(()=>{
        fetch("https://www.swapi.tech/api/planets/"+id)
        .then((response)=>response.json())
        .then((data)=>setPlaneta(data.result))
    },[])

    return ( 
    <div className="container">
        <div className="row-5">
            <img src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"/>
        </div>
        <div className="row-7">
        <p>Aqui va la descripcion del planeta seleccionado: <b>{planeta?.properties?.name}</b></p>
        <ul>
            <li>Diametro: {planeta?.properties?.diameter} km </li>
            <li>Periodo de rotación: {planeta?.properties?.rotation_period} horas </li>
            <li>Periodo orbital: {planeta?.properties?.orbital_period} años </li>
            <li>Gravedad: {planeta?.properties?.gravity} g</li>
            <li>Población: {planeta?.properties?.population} individuos </li>
            <li>Clima: {planeta?.properties?.climate} </li>
            <li>Terreno: {planeta?.properties?.terrain} </li>
            <li>Superficie del agua: {planeta?.properties?.surface_water} m²</li>
        </ul>
        </div>  
    </div>  
)};


//aqui para retornar el detalle de cada personaje//
export const DetallePersonajes = (props)=> {

    const {id} = useParams();
    const [personaje, setPersonaje] = useState({});

    useEffect(()=>{
        fetch("https://www.swapi.tech/api/people/"+id)
        .then((response)=>response.json())
        .then((data)=>setPersonaje(data.result))
    },[])

    return ( 
    <div className="container">
        <div className="row">
            <img width={"700"} height={"500"} src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"/>
        </div>
        <div className="row">
            <h1>Información del personaje: <b>{personaje?.properties?.name}</b></h1>
            <ul>
                <li>Estatura: {personaje?.properties?.height} cm.</li>
                <li>Peso: {personaje?.properties?.mass} kg.</li>
                <li>Color de pelo: {personaje?.properties?.hair_color}</li>
                <li>Color de piel: {personaje?.properties?.skin_color}</li>
                <li>Color de ojos: {personaje?.properties?.eye_color}</li>
                <li>Fecha nacimiento: {personaje?.properties?.birth_year}</li>
                <li>Género: {personaje?.properties?.gender}</li>
            </ul>
        </div>  
    </div>  
)};





//aqui para retornar el detalle de las naves//
export const DetalleNaves = ()=> {

   

    return ( 
    <div className="container">
        <div className="row-5">
            <img src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"/>
        </div>
        <div className="row-7">
        <p>Aqui van los detalles de las naves de la saga</p>
        </div>  
    </div>  
)};

