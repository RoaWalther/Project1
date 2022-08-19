import React from "react";
import {useStorageAlert} from "./storageAlert"
import '../css/storage.css'

function ChangeAlert(sincronizaItem){
    const {show,toggleShow} = useStorageAlert(sincronizaItem);
    if(show){
        return (
            <div className="storage storage-com">
                <p className="parrafo">¡Se han realizado nuevos cambios!</p>
                    <div className="storage-com-carga">
                    <p className="parrafo-carga">¡Debes recargar la pagina!</p>
                    <button className="button" onClick={()=> toggleShow(false)}
                    >¡RECARGAR!</button>
                    </div>
            </div>
        );
    }else{
        return null;
    }
    
}



export {ChangeAlert};