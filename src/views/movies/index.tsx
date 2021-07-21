import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MOVIES_PAGINATE } from 'graphql/queries';
import { ItemInterface } from 'components/card';

const Movies = () => {
  const [page, setPage] = useState(1);
  let movies: ItemInterface[] = [];
  let pages = 1;
  const { data } = useQuery(GET_MOVIES_PAGINATE, {
    variables: {
      page,
      limit: 8,
    },
  });

  if (data) {
    pages = data.getMovies.meta.totalPages;
    movies = data.getMovies.items;
  }

  return (
    <div className="bg-black flex flex-col flex-grow">
      <div className="container mx-auto mt-40 mb-20">
        <div className="flex w-full flex-col md:flex-row text-white flex-wrap">
          {movies?.map((movie: ItemInterface) => (
            <div className="flex flex-col px-3 w-full md:w-1/4 mb-10">
              <img className="h-50 w-full" src={movie.card_url} alt="" />
              <div className="flex my-4 items-center">
                <div className="text-xl">{movie.title}</div>
                <div className="rounded-full border border-white ml-auto text-lg px-4 py-0 font-bold opacity-90">
                  PG13
                </div>
              </div>
              <div>{`${movie.overview.slice(0, 100)} ...`}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-center text-white">
          {Array(pages)
            .fill('')
            .map((_, index) => (
              <div
                className={`m-1 px-2 py-1 rounded cursor-pointer ${
                  page === index + 1 && 'bg-blue-500'
                }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
