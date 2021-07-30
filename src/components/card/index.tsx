import { useState } from 'react';
import classNames from 'classnames';

import Star from 'assets/icons/star.png';
import Later from 'assets/icons/later.png';
import Share from 'assets/icons/share.png';
import Play from 'assets/icons/bt_play.png';
import Triangle from 'assets/icons/triangle.png';

export type ItemInterface = {
  id: number;
  title: string;
  overview: string;
  trailer_url: string;
  card_url: string;
  poster_url: string;
  backdrop_url: string;
  stars: number;
};

type CardProps = {
  index?: number;
  item: ItemInterface;
  border?: boolean;
  scale?: boolean;
  idSelected?: number | undefined;
  type?: 'wide' | 'large';
  onSelected: () => void;
};

const Card = (card: CardProps) => {
  const { onSelected, scale, type, item, border, idSelected, index } = card;
  const [isHover, setHover] = useState(false);
  const printBorder =
    (border && idSelected === item.id) ||
    (border && idSelected === undefined && index === 0);

  return (
    <div onClick={onSelected} data-testid="card">
      {type === 'wide' ? (
        <div
          className={classNames(
            'flex flex-col items-center card hover:z-10 overflow-hidden  cursor-pointer',
            {
              'transform transition duration-200 hover:scale-110': scale,
            }
          )}
        >
          <img
            className={classNames('img-card', {
              'border-4': printBorder,
            })}
            src={item?.card_url}
            alt=""
          />
          {printBorder && (
            <img
              src={Triangle}
              alt=""
              data-testid="border-active"
              className="image-selected w-10 absolute bottom-2"
            />
          )}
        </div>
      ) : (
        <div
          className={classNames(
            'card-large flex flex-grow  cursor-pointer overflow-hidden transform transition duration-200',
            {
              'scale-110 z-10': isHover,
            }
          )}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src={item?.poster_url} alt="" />
          {isHover ? (
            <div className="container-hover ">
              <div className="opacity-30 w-full flex justify-center mb-auto mt-10">
                <img src={Play} alt="" className="w-1/2" />
              </div>

              <div className="flex justify-center">
                <div className="text-3xl mx-1 flex text-center">
                  {item?.title}
                </div>
                <div className="flex items-center mx-1 flex-wrap justify-center self-center">
                  {Array.from(Array(item.stars).keys()).map((_) => (
                    <img className="w-2 m-1" src={Star} alt="" key={_} />
                  ))}
                </div>
              </div>
              <div className="mt-4 mb-8 flex  text-sm justify-center text-center">
                <div className="flex items-center justify-start">
                  <img className="w-3 mr-2" src={Later} alt="" />
                  Watch Later
                </div>
                <div className="ml-3 flex items-center justify-right">
                  <img className="w-3 mr-2" src={Share} alt="" />
                  Share
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute bottom-20 w-full flex justify-center">
              <div className="bg-blue-600 px-4 font-bold text-sm">
                MOVIE ORIGINAL
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  border: false,
  scale: true,
  type: 'wide',
  onSelected: () => null,
};

export default Card;
