/* eslint-disable comma-dangle */
import { useState } from 'react';
import Card, { ItemInterface } from 'components/card';

import { movies, moviesByMovy } from 'mocks/movies';

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
  const [currentItem, setItem] = useState<ItemInterface>(movies[0]);
  const sectionCards = ({
    title,
    items,
    showPercentage = false,
    type = 'wide',
    scale = true,
    border = false,
  }: CardProps) => {
    const onClickCard = (item: ItemInterface) => setItem(item);

    return (
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
                onSelected={onClickCard}
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
  };

  return (
    <div className="bg-black flex flex-col text-white">
      <Trailer />
      {sectionCards({ title: 'My List', items: movies })}
      {sectionCards({ title: 'Popular on Movy', items: movies })}
      {sectionCards({
        title: 'Continue Watching for John',
        items: movies,
        showPercentage: true,
      })}
      <Preview />
      {sectionCards({
        title: 'Most Viewed',
        items: moviesByMovy,
        type: 'large',
      })}
      {sectionCards({
        title: 'Recommended movies',
        items: movies,
        border: true,
        scale: false,
      })}
      <About {...currentItem} />
    </div>
  );
};

export default Login;
