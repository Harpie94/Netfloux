import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./Home.css"

let Genres=[
  {"nom":"Action", "id":28},{"nom":"Adventure", "id":12},{"nom":"Animation", "id":16},{"nom":"Comedy", "id":35},{"nom":"Crime", "id":35},{"nom":"Documentary", "id":99},
  {"nom":"Drama", "id":18},{"nom":"Family", "id":10751},{"nom":"Fantasy", "id":36},{"nom":"Horror", "id":27},{"nom":"Music", "id":10402},,{"nom":"Mystery", "id":9648},
  {"nom":"Romance", "id":10749},{"nom":"Science-fiction", "id":878},{"nom":"TV Movie", "id":10770},{"nom":"Thriller", "id":53},{"nom":"War", "id":10752},{"nom":"Western", "id":37}
]

const Film = () => {
  let { id } = useParams();

  const [film, setFilm] = useState([]);
  
  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`);
    console.log(film);
    setFilm(res.data.results);
    const genre = {"id": [`${film[id].genre_ids}`]};
    console.log(genre);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar/>
      {film.length > 0 &&
      <div>
        
        <div className="textfilm">
            <div className="text">
              <p>{film[id].title} </p>
              <p className="genre">{film[id].genre_ids+""}</p>
            </div>
            <p className="overview">{film[id].overview}</p>
          </div>
          <div className="Container">
          <img id="clip" className="fond" alt="fond" src={`https://image.tmdb.org/t/p/original/${film[id].backdrop_path}`}></img>
        </div>
      </div>
        }
    </div>
  );

};

export default Film;