import PropTypes from "prop-types";
import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const rating = Array.apply("a", Array(movie.rating));
  return (
    <Link to={`/post/${movie.id}`} key={movie.id} className="card-link">
      <div className="card">
        <div className="card-img-wrapper">
          <img src={movie.imageUrl} width="80px" />
        </div>
        <div className="movie-desc-wrapper">
          <div className="card-title-wrapper">
            <h3>{movie.title}</h3>
            <small>{movie.createdAt}</small>
          </div>
          <div className="ratings">
            {rating.map((x, i) => (
              <i className="fa-solid fa-star icon-star-color" key={i}></i>
            ))}
          </div>
          <div className="card-genre-wrapper">
            <i className="fa-solid fa-film"></i>
            <small>{movie.genre.join(", ")}</small>
          </div>
          {/* <p>{movie.review}</p> */}
          <p>{movie.release_year}</p>
          <p className="personal-note">"{movie.review}"</p>
          {/* <div className="card-watched-wrapper">
          <small>
            <i className="fa-solid fa-clock"></i>
          </small>
          <small>{movie.watchedAt}</small>
        </div> */}
          <div className="card-watched-wrapper location-section">
            <i className="fa-solid fa-location-dot"></i>
            <p>{movie.location}</p>
          </div>
          {/* <div className="card-watched-wrapper">
          <i className="fa-solid fa-clock"></i>
          <p>{movie.watchedAt}</p>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  location: PropTypes.string,
};

export default Card;
