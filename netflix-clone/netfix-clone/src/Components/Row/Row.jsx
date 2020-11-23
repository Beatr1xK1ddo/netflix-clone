import React, { useEffect, useState } from "react";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import axios from "../../axios";
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name )
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        console.log(urlParams.get('v'))
        setTrailerUrl(urlParams.get('v'))
      })
      .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
 
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img 
          key={movie.id}
          src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} 
          className={`row__poster ${isLargeRow && "large__posterpath"}`}
          onClick={() => handleClick(movie)}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
