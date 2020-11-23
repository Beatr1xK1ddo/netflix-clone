import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import requests from '../../request'
import './Header.css'

function Header() {
    const [movie, setMovies] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal)
            let random = Math.floor(Math.random() * request.data.results.length - 1)
            setMovies(request.data.results[random])
            return request
        }
        fetchData()
    }, [])
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const style = {
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center"
    }
    function truncate(str, n) {
        return str?.length > n ? str.substr(0,n) + " ..." : str
    }

    return (
        <header className="banner" style={style}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__btns">
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Header
