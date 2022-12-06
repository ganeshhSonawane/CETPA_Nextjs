import React from "react";
import style from "../styles/header.module.css";

const Searchbar = () => {
    return(
        <div className={[style.search, "col-1 bg-light"].join(" ")}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default Searchbar;