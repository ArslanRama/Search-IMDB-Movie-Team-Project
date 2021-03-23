import React, { useReducer, useEffect,useState } from 'react'
import './App.css'

/* Components */
import Header from './components/Header'
import Movies from './components/Movie'
import MoviesList from './components/MovieList'
import Search from './components/Search'
import AddFavourites from './components/AddFav'
import RemoveFav from './components/RemoveFav'
// import AddFav from './components/AddFav'
import MovieListHeader from './components/MovieListHeader'

/* API */
const API_KEY = 'd1ce076e'

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
       
      }
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
   const [favourites, setFavourites] = useState([])
   console.log(favourites);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search,
        })
      })
  }, [])

  const addFavouriteMovie = (movie) => {
    const NewFavouriteList = [...favourites, movie]
    setFavourites(NewFavouriteList)
  }


    const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID,
    )

    setFavourites(newFavouriteList)
  }
  const search = (searchValue) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    })

    /* Fetching the data */
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search,
          })
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error,
          })
        }
      })
  }


  const { movies, errorMessage, loading } = state

  return (
    <div className="App">
      <div className="Nav">
        <Header text="Search IMDB MOVIES with HOOK" />
        <Search search={search} />
      </div>
      <p className="App-intro"></p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span className="loader"></span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movies key={`${index}-${movie.Title}`} movie={movie}
          />
          ))
        )}
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Favourites" />
      </div>
              <div className="row">
        {' '}
        <MoviesList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavoriteClick={addFavouriteMovie}
        />
      </div>

        <MoviesList
          movies={favourites}
          favouriteComponent={AddFavourites}
          handleFavoriteClick={addFavouriteMovie}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          movies={favourites}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          handleFavoriteClick={removeFavouriteMovie}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          favouriteComponent={RemoveFav}
        />
      
      </div>
    </div>
  )
}

export default App
