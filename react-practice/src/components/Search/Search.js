import React from 'react'
import './Search.css'

 const Search = (props) => {

    return (
        <div className="search__container">
            <input id="search" type="text" placeholder="search..."
            value={props.searchTerm} 
            onChange={props.changeHandler}/>
        </div>
    )
}


export default Search
