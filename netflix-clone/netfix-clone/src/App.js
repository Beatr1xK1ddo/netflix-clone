import React from "react";
import Row from "./Components/Row/Row";
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import requests from "./request";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginal}
      isLargeRow />
      <Row title="Trending Now" 
      fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" 
      fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy movies" 
      fetchUrl={requests.fetchComediMovies}/>
      <Row title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaryMovies} />
    </div>
  );
}

export default App;
