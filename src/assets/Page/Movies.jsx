import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import supabase from "./supabase.js"
import './Movies.css'


function netflix() {
  const [moviesData, setMoviesData] = useState([]);

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
        <div className="cards">
          
        <div className="flex-container">
          {moviesData.map(({overview,imgurl,name}) => (
              <div className="image-box">
              <img
                src={imgurl}
                />
              <div className="movie_name">
                <h1>{name}</h1>
                <p>{overview}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      
    </>
  );
}

export default netflix;
  

