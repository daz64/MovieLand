import { useEffect, useState } from 'react';

import './App.css';
import AppTitle from './AppTitle';
import ListOfMovies from './ListOfMovies';
import Search from './Search';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie = {
    "Title": "Italian Spiderman", "Year": "2007",
    "imdbID": "tt2705436", "Type": "movie",
    "Poster": "N/A"
};
    
const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = (title) => { 
        fetch(`${API_URL}&s=${title}`)
        .then( response => response.json()) 
        .then (data => setMovies(data.Search))
    };

    useEffect(() => {
        searchMovies('superman')
    }, []);

    return (
    <div className="app">
        <AppTitle /> 
        <Search myFunction = {searchMovies} />
        <ListOfMovies movies={movies} />
    </div>
    ); 
}
export default App;