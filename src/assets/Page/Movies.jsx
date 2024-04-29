import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import supabase from "./supabase.js"
import './Movies.css'
import SearchBar from "../Components/SearchBar.jsx";


function netflix() {
const [moviesData, setMoviesData] = useState([]);
const [Input, setInput] = useState();

  
  useEffect(() => {
    getTrendingMovieData("movie");
}, []);
async function getTrendingMovieData(type) {
    try {
        const {data} = await supabase.from('MovieReview').select()
        setMoviesData(data)
    } catch (err) {
    }
}

  return (
    <>
      <SearchBar movies={moviesData}/>
      <div className="cards">
        <div className="flex-container">
          {moviesData.map(({ id, overview, imgurl, name }) => (
            <Link to={`review#${id}`} className="image-box">
              <img src={imgurl} />
              <div className="movie_name">
                <h1>{name}</h1>
                <p>{overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default netflix;
  

