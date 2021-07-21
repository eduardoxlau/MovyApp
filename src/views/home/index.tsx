import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MOVIES } from 'graphql/queries';
import Card, { ItemInterface } from 'components/card';

import Trailer from './trailer';
import Preview from './preview';
import About from './about';

type CardProps = {
  title: string;
  items: ItemInterface[];
  showPercentage?: boolean;
  type?: 'wide' | 'large';
  scale?: boolean;
  border?: boolean;
};
const Login = () => {
  let movies: ItemInterface[] = [];

  const { data } = useQuery(GET_MOVIES);

  if (data) movies = data.getMovies.items;

  const [currentItem, setItem] = useState<ItemInterface>();
  useEffect(() => setItem(movies[0]), [movies]);

  const sectionCards = ({
    title,
    items,
    showPercentage = false,
    type = 'wide',
    scale = true,
    border = false,
  }: CardProps) => (
    <div>
      <div className="container text-2xl mx-auto">{title}</div>
      <div
        className={`flex mt-1 pb-6 relative  w-full container-movies overflow-x-scroll overflow-y-hidden  items-center container-card ${
          type === 'large' ? 'p-6' : 'py-0'
        }`}
      >
        {items.map((item, index) => (
          <div className="mx-1 z-0">
            <Card
              item={item}
              scale={scale}
              type={type}
              index={index}
              onSelected={() => setItem(item)}
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
      <Trailer {...movies[0]} />
      {sectionCards({ title: 'My List', items: movies })}
      {sectionCards({ title: 'Popular on Movy', items: movies })}
      {sectionCards({
        title: 'Continue Watching for John',
        items: movies,
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
      })}
      {currentItem && <About {...currentItem} />}
    </div>
  );
};

export default Login;
