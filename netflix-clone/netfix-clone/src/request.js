// 5a2d40d5d191fa9cfb33811fd7a55625

const APIKEY = "5a2d40d5d191fa9cfb33811fd7a55625" 

const requests =  {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
    fetchNetflixOriginal: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=28`,
    fetchComediMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=99`
}

export default requests