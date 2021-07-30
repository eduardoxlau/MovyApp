import { useQuery } from '@apollo/client';

import Loading from 'components/loading';
import { GET_MOVIES } from 'graphql/queries';
import { ItemInterface } from 'components/card';

const More = () => {
  const { data, loading } = useQuery(GET_MOVIES);

  if (loading) return <Loading />;
  const moviesSuggestions: ItemInterface[] = data.getMovies.items;

  return (
    <div className="z-10 flex container mx-auto flex-col">
      <div className="flex pb-3 items-center text-3xl">A Movie Film </div>
      <div className="flex items-center flex-row text-5xl font-black mb-10">
        The matrix
      </div>
      <div className="flex w-full flex-col md:flex-row">
        {moviesSuggestions.slice(0, 4).map((suggestion: ItemInterface) => (
          <div
            className="flex flex-col mx-3 w-full md:w-1/4 mb-10"
            key={suggestion.id}
          >
            <img className="h-50 w-full" src={suggestion.card_url} alt="" />
            <div className="flex my-4 items-center">
              <div className="text-xl">{suggestion.title}</div>
              <div className="rounded-full border border-white ml-auto text-lg px-4 py-0 font-bold opacity-90">
                PG13
              </div>
            </div>
            <div>{suggestion.overview}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
