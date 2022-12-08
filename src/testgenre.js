// import React, { useContext, useEffect } from "react";
// import MovieContext from "../context/movie/movieContext";

// const MovieInfo = ({ match }) => {
//   const movieContext = useContext(MovieContext);
//   const { movieInfo, getMovieInfo } = movieContext;


//   useEffect(() => {
//     getMovieInfo(match.params.id);
//     //eslint-disable-next-line
//   }, []);

//   const { poster_path, title, genres } = movieInfo;

//   const genresArr = [];

//   genres.forEach((genre) => {
//     if (genre.name === true) {
//       genresArr.push(genre.name);
//     }
//   });

//   const genre2 = genresArr.slice(0, 2);

//   return (
//     <div className="w-full bg-black">
//       <div className="container w-4/5 h-600px overflow-hidden bg-gray-900 mx-auto mt-4">
//         <div className="w-1/4 h-auto float-left overflow-hidden">
//           <img
//             src={"https://image.tmdb.org/t/p/w400/" + poster_path}
//             alt=""
//             className="w-full block content-center p-4"
//           />
//         </div>
//         <div className="w-3/4 h-auto float-right overflow-hidden  p-2">
//           <h3 className="text-2xl text-white font-mono mt-4 mb-3">{title}</h3>
//           <h3 className="text-2xl text-white font-mono ">{genre2}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieInfo;