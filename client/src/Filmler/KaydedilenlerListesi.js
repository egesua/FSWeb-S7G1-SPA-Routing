import React from "react";
import { NavLink } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <NavLink
          className={(isActive) => (isActive ? "active" : null)}
          to={`/filmler/${movie.id}`}
        >
          <span className="saved-movie">
            {props.movies.find((item) => item.id).title}
          </span>
        </NavLink>
      ))}
      <NavLink
        exact
        className={(isActive) => (isActive ? "hide" : null)}
        to="/"
      >
        <div className="home-button">Anasayfa</div>
      </NavLink>
    </div>
  );
}
