import React, { useReducer, useEffect } from "react"

//* Children Components */
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";

//* Navigaton Components */
import NavBar from "./Navigation/NavBar";

//* API KEY
const API_KEY = 'd1ce076e';

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

//* initial this.state

const initialState = {
  isLoading: true,
  movies: [],
  errorMessage: null,
}

//* REDUCER
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

//** Add Favourites to favourite section */

// const [favourites, setFavourites] = useState(initialState)
// 
// const addFavorite = (movie) => {
// const newFavorite = [...favourites,movie]
// setFavourites  (newFavorite)
// 
// }


function App() {

  // dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(data => {

        dispatch({
          type: 'SEARCH_MOVIE_SUCCESS',
          payload: data.Search
        });
      });
  }, []);


  //* search request
  const searchMovie = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIE_REQUEST'
    })

    //* fetching data
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIE_SUCCESS',
            payload: data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: data.Error
          });
        }
      })
  }

 
  const { movies, errorMessage, isLoading } = state;

  return (
    <div>
      {/* Navbar Parent */}
      <NavBar />

      <div>

        <Header text='Search IMDB Movies' />
        <Search search={searchMovie} />
        {/* 
        //! this part must be connected to Movies.jsx use the same parameter "movie" in Movies.jsx 
        We use the variables " movies, errorMessage, isloading" in line 94. 
        We can use ternary operator with mapping to show the success or error. 
        */}
        <Movies

        
        
        />
       

      </div>
    </div>

  );
}

export default App;
