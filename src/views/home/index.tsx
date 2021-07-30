import { useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { List } from 'views/trailer';
import Loading from 'components/loading';
import { UserContext } from 'storage/context';
import Card, { ItemInterface } from 'components/card';
import { GET_LISTS, GET_MOVIES, GET_MOVIES_SEEN } from 'graphql/queries';

import About from './about';
import Trailer from './trailer';
import Preview from './preview';

type CardProps = {
  title: string;
  items: ItemInterface[];
  showPercentage?: boolean;
  type?: 'wide' | 'large';
  scale?: boolean;
  border?: boolean;
  openTrailer?: boolean;
};
const Home = () => {
  const { context } = useContext(UserContext);
  const { user } = context;
  const history = useHistory();
  const [currentItem, setItem] = useState<ItemInterface>();

  const { data, loading } = useQuery(GET_MOVIES);

  const { data: dataLists, loading: loadingList } = useQuery(GET_LISTS);

  const { data: dataMoviesSeen, loading: loadingSeen } =
    useQuery(GET_MOVIES_SEEN);

  if (loading || loadingList || loadingSeen) return <Loading />;

  const movies: ItemInterface[] = data?.getMovies.items;
  const moviesSeen: ItemInterface[] = dataMoviesSeen?.getMoviesSeen;
  const moviesOnMyLists =
    dataLists?.getLists
      ?.map((list: List) => list.movies.map((movie) => movie))
      .flat() || [];

  const sectionCards = ({
    title,
    items,
    showPercentage = false,
    type = 'wide',
    scale = true,
    border = false,
    openTrailer = true,
  }: CardProps) => (
    <div>
      <div className="container text-2xl mx-auto">{title}</div>
      <div
        className={`flex mt-1 pb-6 relative  w-full container-movies overflow-x-scroll overflow-y-hidden  items-center container-card ${
          type === 'large' ? 'p-6' : 'py-0'
        }`}
      >
        {items.map((item, index) => (
          <div className="mx-1 z-0" key={item.id}>
            <Card
              item={item}
              scale={scale}
              type={type}
              index={index}
              onSelected={() => {
                if (openTrailer) history.push(`/trailer/${item.id}`);
                setItem(item);
              }}
              border={border}
              idSelected={currentItem?.id}
            />
            {showPercentage && (
              <div className="relative w-full h-1.5 bg-gray-200 rounded">
                <div
                  className="absolute h-full bg-blue-500 rounded"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="bg-black flex flex-col text-white">
      {movies && <Trailer {...movies[0]} />}

      {moviesOnMyLists.length > 0 &&
        sectionCards({
          title: 'My List',
          items: moviesOnMyLists,
        })}
      {sectionCards({ title: 'Popular on Movy', items: movies })}
      {moviesSeen.length > 0 &&
        sectionCards({
          title: `Continue Watching for ${user?.full_name}`,
          items: moviesSeen,
          showPercentage: true,
        })}
      {currentItem && <Preview {...movies[1]} />}
      {sectionCards({
        title: 'Most Viewed',
        items: movies,
        type: 'large',
      })}
      {sectionCards({
        title: 'Recommended movies',
        items: movies,
        border: true,
        scale: false,
        openTrailer: false,
      })}
      <About item={currentItem || movies[0]} />
    </div>
  );
};

export default Home;
