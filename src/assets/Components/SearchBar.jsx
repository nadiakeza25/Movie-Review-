import { useState } from "react";
import "./SearchBar.css";
import supabase from "../Page/supabase.js";
import { Link } from "react-router-dom";
const SearchBar = ({ movies }) => {
  const [dis, setdis] = useState({
    height: "10vh",
    background: "none",
    show: false,
  });
  const [movieResults, setmovieResults] = useState([]);
  const [keyword, setkeyword] = useState("");
  const handleSearch = async () => {
    setdis({
      height: "100vh",
      background: "rgb(220, 220, 220)",
      show: true,
    });
    const results = [];
    movies.filter((item) => {
      if (
        item.name &&
        item.name.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return results.push(item);
      }
    });
    setmovieResults(results);
  };

  return (
    <>
      <div
        className="search_cont"
        style={{
          height: dis.height,
          background: dis.background,
        }}
      >
        {dis.show ? (
          <img
            className="x"
            src="https://th.bing.com/th/id/OIP.3oO210uLFiYEQatewXlhVwHaHa?w=218&h=218&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt=""
            onClick={() => {
              setdis({
                height: "10vh",
                background: "none",
                show: false,
              });
              setmovieResults([]);
            }}
          />
        ) : (
          ""
        )}
        <input
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          className="searchbar"
          text="text"
          placeholder="Search"
        ></input>
        <button className="btn_search" onClick={handleSearch}>
          🔍
        </button>
        <div className="flex-container">
          {movieResults.map(({ id, overview, imgurl, name }) => (
            <Link to={`review#${id}`} className="image-box">
              <img src={imgurl} />
              <div className="movie_name">
                <h1>{name}</h1>
                <p>{overview}</p>
              </div>
            </Link>
          ))}
          {dis.show?(<h1>No results found</h1>):""}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
