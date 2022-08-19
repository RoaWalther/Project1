import React from "react";

function useStorageAlert(props){
       const [storageChange, setStorageChange] = React.useState(false);
       window.addEventListener('storage', (change)=> {
            if(change.key ==='TODOS_V1'){
                console.log('hubo cambios');
                setStorageChange(true);
            }
       });

       const toggleShow = ()=>{
           props.sincronizaItem();
           setStorageChange(false);
       }

       return (
        { 
           show: storageChange,
           toggleShow: toggleShow,
        }
       )
   
}

export{useStorageAlert};