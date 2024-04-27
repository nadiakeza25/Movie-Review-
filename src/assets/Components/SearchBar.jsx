import React from 'react'
import './SearchBar.css'
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <>
      <div>
        <img
          className="logo"
          src="https://data.textstudio.com/output/sample/animated/6/9/5/6/netflix-1-16596.gif"
          alt="logo"
        />
      </div>

      <div>
        <input className="searchbar" text="text" placeholder="Search" />
      </div>

      <button className="bg-white">{<SearchIcon style={{ fontSize: "2.2em" }} />}
      </button>
    </>
  );
}

export default SearchBar
