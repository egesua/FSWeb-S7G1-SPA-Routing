import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, } from "react-router-dom";
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import Film from './Filmler/Film';
import FilmListesi from './Filmler/FilmListesi';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          // Bu kısmı log statementlarıyla çalışın
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = movie => {
    if (!saved.includes(movie)) {
      saved.push(movie);
      setSaved([...saved]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} movies={movieList} />
      <div>
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:id">
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
    </div>
  );
}
