import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";
const initialState = {
    watchlist: [],
    finished: [],
}

//Create a context
export const GlobalStateContext = createContext(initialState);

//provider component 
export const GlobalStateProvider= ({children}) =>

{
    const [state, dispatch] =useReducer(AppReducer, initialState);


//actions

const addToAnimelist = (anime) => {
    dispatch({type: "ADD_TO_ANIMELIST", payload: anime});
}
return(
    <GlobalStateContext.Provider 
    value={{watchlist: state.watchlist, finished: state.finished, addToAnimelist}}>

    {children}
    </GlobalStateContext.Provider>
)
}
