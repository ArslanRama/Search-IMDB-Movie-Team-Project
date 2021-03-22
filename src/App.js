import React from 'react'
//* Children Components */
// import Header from "./components/Movies";
import Movies from "./components/Movies"
import Search from "./components/Search";
import MovieList from "./components/MovieList"

//* Navigaton Components */
import NavBar from "./Navigation/NavBar";
import MainContextProvider from './context/MainContext';
// import MovieList from './components/MovieList';

function App() {
   

    return (
        <MainContextProvider>
        <div>
            <NavBar />
            <MovieList />
            <Search/>
            <Movies />
        </div>
        </MainContextProvider>
    )
}

export default App
