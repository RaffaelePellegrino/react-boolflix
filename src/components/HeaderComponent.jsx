import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";


function HeaderComponent({onSearch}) {
    return (
        <header className="navbar">
            <div>
                Boolflix
            </div>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
        </header>
    )
}

export default HeaderComponent;