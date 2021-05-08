import React from 'react';
import '../src/styles.css';

type movie = {
  Poster: string;
  Title: string;
  Year: string;
};

const MovieList = (props: movie) => {
  return (
    <div className="w-1/3 text-center">
      <div className="text-center">
        <h2 className="text-xl">{props.Title}</h2>
        <img className="h-80 block m-auto" src={props.Poster} alt="" />
        <p>{props.Year}年公開</p>
      </div>
    </div>
  );
};

export default MovieList;
