import React from 'react';
import '../src/styles.css';

type movie = {
  Poster: string;
  Title: string;
  Year: string;
};

const MovieList = (props: movie) => {
  return (
    <div className="w-full text-center mb-4 md:w-1/2 lg:w-1/3">
      <h2 className="text-xl mb-2">{props.Title}</h2>
      <img className="h-80 block m-auto" src={props.Poster} alt="" />
      <p className="mt-2">{props.Year}年公開</p>
    </div>
  );
};

export default MovieList;
