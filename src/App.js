import React from 'react'
//* Children Components */
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";

//* Navigaton Components */
import NavBar from "./Navigation/NavBar";
import MainContextProvider from './context/MainContext';

function App() {
    return (
        <MainContextProvider>
        <div>
            <NavBar />
            <Header />
            <Search/>
            <Movies />
        </div>
        </MainContextProvider>
    )
}

export default App
