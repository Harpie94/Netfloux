import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import Navbar from "./Navbar"

const Home = () => {
  const [listFilm, setlistFilm] = useState([]);
  const [listFilmFiltered, setlistFilmFiltered] = useState([]);
  

  async function getData() {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d3994bb5c3f66e144147b5e2130fc60c&language=en-US");
    console.log("res", res.data);
    console.log("res", res.data.results);
    setlistFilm(res.data.results);
    setlistFilmFiltered(res.data.results);
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  
  function handleChange(e) {
    if (!e.target.value) {
      setlistFilmFiltered(listFilm);
      return;
    }
    
    setlistFilmFiltered(
      listFilm.filter((film) => film.title.includes(e.target.value))
      );
    }
    
    return (
    <div className="Homebody">
      <Navbar/>
      <input onChange={handleChange} type="text" className="navbar"/>
      <div className="Home">
      {listFilmFiltered.map((film, index) => {
        return (
          
          
          <div className="div">
          <p key={film.title}>
            <div className="films">
          <a href={`/film/${index}`}><img className="poster" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} ></img></a>
            </div>
          </p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Home