import React from "react";
import { useState } from "react";

function SearchBar({onSearch}){
    const [query,setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        // console.log(query)
        setQuery("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Cerca un Film..."
            />
            <button type="submit">Cerca</button>
        </form>
    )
}

export default SearchBar;