import React, { useReducer, useEffect, useState } from 'react'
import './styles/App.css'

/* Components */
import RemoveFav from './components/RemoveFav'
import AddFav from './components/AddFav'
import MovieListHeader from './components/MovieListHeader'
import MovieList from './components/MovieList'

/* Components */
import Header from './components/Header'
import Movie from './components/Movie'
import Search from './components/Search'
import Navbar from './Navigation/Navbar'
import FooterPage from './Footer/footer'

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
  console.log(favourites)

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

  const saveToLocalStorage = (item) => {
    localStorage.setItem('myLocalStorage', JSON.stringify(item))
  }

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('myLocalStorage'))
    setFavourites(movieFavourites)
  }, [])

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID,
    )

    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
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
        <Navbar />
        <Header text="IMDB MOVIE APP" />
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
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
        <div className="row d-flex align-items-center mt-4 mb-4"></div>
        <div className="row">
          {' '}
          {/* Adding Favourites */}
          <MovieList
            movies={movies}
            favouriteComponent={AddFav}
            handleFavoriteClick={addFavouriteMovie}
          />
        </div>

        {/* Adding Favourites */}
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeader heading="Favourites" />
        </div>
        {/* Removing Favourites */}
        <MovieList
          movies={favourites}
          handleFavoriteClick={removeFavouriteMovie}
          favouriteComponent={RemoveFav}
        />
      </div>
      <FooterPage />
    </div>
  )
}

export default App
