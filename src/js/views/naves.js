import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { ListadoCard } from "../component/card";


export const Naves = () => {
    const {store,actions} = useContext(Context);
        return <div className="container text-center">
                    <h1>LISTADO DE NAVES SW</h1>
                    <div className="row">
                        {store.naves.map((object,index)=>{
                             return <ListadoCard 
                                        titulo={object.name}
                                        boton="Quiero saber +" 
                                     />
                      })}
                    
                    </div>
                </div>
}