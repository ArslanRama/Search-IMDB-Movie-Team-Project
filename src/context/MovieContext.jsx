import React, { createContext, useEffect, useReducer } from 'react'

export const MyContext = createContext();

const initialState = {
  isLoading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
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
const MyProvider = ({ children }) => {
  console.log('MyProvider', children)
  //const initialState = []
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d1ce076e")
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: "SEARCH_MOVIE_SUCCESS",
          payload: data
        })
      })

  }, [])
  
  return (
    <MyContext.Provider value={[state, dispatch]}>
      {children}
    </MyContext.Provider>
  )
}
export default MyProvider
