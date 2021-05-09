import axios from 'axios';
import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import './styles.css';

type Data = {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  const [movies, setMovies] = useState<Data[]>([]);
  const [searchText, setSearchText] = useState('');

  const data = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchText}&apikey=5536f5cd`)
      .then((res) => {
        if (res.data.Error === 'Too many results.') {
          alert(
            '検索結果が多すぎます。もう少し詳しいワードで検索してください。'
          );
          return;
        } else if (res.data.Error === 'Movie not found!') {
          alert('検索結果が見つかりませんでした。');
          return;
        } else {
          const data: Array<Data> = res.data.Search;
          setMovies(data);
        }
      });
  };

  const onChangeText = (event: any) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <h1 className="bg-red-900 text-white text-center text-2xl">
        映画検索アプリ
      </h1>
      <div className="bg-gray-600 min-h-screen">
        <div className="w-3/5 mx-auto mt:w-4/5">
          <div className="mx-auto py-5 justify-between md:flex">
            <input
              className="bg-gray-200 pl-1 w-full md:w-9/12 lg:w-7/12"
              type="text"
              name=""
              id=""
              placeholder="映画のタイトルを入力（英語のみ）"
              onChange={onChangeText}
              value={searchText}
            />
            <button
              className="bg-red-900 text-white font-bold w-full mt-4 py-1 rounded md:w-3/12 md:mt-0"
              onClick={data}
            >
              検索
            </button>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="flex flex-wrap justify-between">
            {movies.map((movie) => {
              return (
                <MovieList
                  Title={movie.Title}
                  Poster={movie.Poster}
                  Year={movie.Year}
                  key={movie.imdbID}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
