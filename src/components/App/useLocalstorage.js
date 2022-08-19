import React from "react";

function useLocalStorage(itemName, inicialValue){

    const [state, disPatch] = React.useReducer( reducer , initialState({inicialValue}));
    const {
      sincronizaItem,
      loading,
      error,
      item,
    } = state;
   
    const onError= (error)=> disPatch({type: actionType.error, payload: error}); 
    const onSuccess = (item)=> disPatch({type: actionType.success, payload: item});
    const onSave = (item)=> disPatch({type: actionType.save, payload: item});
    const onSincronize = ()=> disPatch({type: actionType.sincronize,});

  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parseItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(inicialValue));
            parseItem =inicialValue;
          }else{
            parseItem = JSON.parse(localStorageItem);
          };
          onSuccess(parseItem);
        }catch(error){
          onError(error)
        }
      },1000);
    },[sincronizaItem]);
  
    const saveItem = (newItem)=>{
      try{
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifyItem);
        onSave(newItem);
      }catch(error){
        onError(error);
      }
    };

    const sincronize = ()=>{
     onSincronize();
    }
  
    return {
      item,
      saveItem, 
      loading,
      error,
      sincronize,
    }     
  }

  const initialState = ({inicialValue})=>({
    sincronizaItem: true,
    loading: true,
    error: false,
    item: inicialValue,
  });

  const actionType = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
   
  }

  const reducerObject =(state, payload)=>({
    [actionType.error]: { error: true,},
    [actionType.success]: {...state, item: payload, loading: false, sincronizaItem:true},
    [actionType.save]: {...state, item: payload,},
    [actionType.sincronize]: {...state, loading: true, sincronizaItem:false},
  })

  const reducer = (state, action)=>{
    if(reducerObject(state)[action.type]){
      return reducerObject(state, action.payload)[action.type];
    }else{
        return state;
    }
  }

  export {useLocalStorage};