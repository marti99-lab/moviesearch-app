import './App.css';
import SearchMovies from './SearchMovies';
import { useState } from 'react';
import FavouritesList from './FavouritesList'

function App() {
  const [favourites, setFavourites] = useState([])

  const addFavourite = (movie) => {
    setFavourites([...favourites, movie])
  }

  const removeFavourite = (movie) => {
     setFavourites(favourites.filter(f => f.imbID !== movie.imbID))
  }

  console.log(favourites)
  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite} />
      <FavouritesList favourites={favourites} removeFavourite={removeFavourite}/>
    </div>
  );
}

export default App;
