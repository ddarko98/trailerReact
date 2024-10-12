import { useState } from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import './App.css'

function App() {
  const [video, setVideo] = useState('')
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment')
  const [error, setError] = useState(''); 


  function handleSearch() {
    movieTrailer(video)
      .then((res) => {
        if (res) {
          setVideoUrl(res);
          setError(''); 
        } else {
          setError('Trailer not found');
          setVideoUrl(''); 
        }
      })
      .catch((err) => {
        setError('An error occurred while searching for the trailer');
        setVideoUrl(''); 
      });
  }
  return (
    <div className="App">
      <div className="searchBox">
        <label>
          Search for any movies {""}
        </label>
        <input type="text" name="" id="" onChange={(e) => {
          setVideo(e.target.value)}}/>
        <button onClick={()=>{
          handleSearch()
        }}>Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {}
      {videoUrl ? <ReactPlayer url={videoUrl} controls={true} /> : <p>No video available</p>}
    </div>
     
  )
}

export default App
