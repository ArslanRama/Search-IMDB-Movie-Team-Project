import React, { createContext, useEffect, useReducer} from 'react'
export const MyContext = createContext();
const reducer = (state,action)=>{
    switch(action.type){
        case 'SEARCH_MOVIE_REQUEST':
            return {
              ...state,
              isLoading: true,
              errorMessage: null
            };
          case 'SEARCH_MOVIE_SUCCESS':
            return {
              ...state,
              isLoading: true,
              movies: action.payload
            };
          case 'SEARCH_MOVIE_FAILURE':
            return {
              ...state,
              isLoading: true,
              errorMessage: action.error
            };
          default:
            return state;
        }
    }
const MainContextProvider = ({children})=> {
  console.log('MainContextProvider', children)
  const initialState = []
  const [state, dispatch] = useReducer(reducer, initialState)

  //* API KEY
// const API_KEY = 'd1ce076e';
// const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

useEffect(()=>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d1ce076e`)
    .then((res)=>res.json())
    .then(data => dispatch({type:"SEARCH_MOVIE_SUCCESS", payload: data}))
},[]) 
console.log(state)
    return (
        <MyContext.Provider value={[...state, dispatch]}>
            {children}
        </MyContext.Provider>
    )
}
export default MainContextProvider






































































