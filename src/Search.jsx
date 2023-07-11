import { useState } from 'react';
import SearchIcon from './SearchIcon.png';

const Search = ({myFunction}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const searchButton = document.getElementById("searchButton");

    return (
        <div className="search"> 
            <input 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                onKeyPress={e=>{
                    if (e.key === "Enter") {
                        searchButton.click();
                    }
                } }
                /> 
            <img 
                id="searchButton"
                src={SearchIcon} 
                alt="search" 
                onClick={()=>myFunction(searchTerm)}
                /> 
        </div>
    );
}

export default Search;