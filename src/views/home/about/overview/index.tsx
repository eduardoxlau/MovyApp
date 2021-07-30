import { Link } from 'react-router-dom';

import Play from 'assets/icons/play.png';
import Star from 'assets/icons/star.png';
import Save from 'assets/icons/save.png';
import Share from 'assets/icons/share_blue.png';
import { ItemInterface } from 'components/card';

const Overview = (item: ItemInterface) => {
  const { title, overview: description, stars, id } = item;
  return (
    <div className="z-10 flex container mx-auto flex-col">
      <div className="flex pb-3 items-center font-bold text-4xl">
        A Movie Film
      </div>
      <div className="flex items-center flex-row text-6xl font-black mb-2">
        {title}
      </div>

      <div className="flex mt-3 mb-6 items-center">
        <div className="flex items-center">
          {Array.from(Array(stars).keys()).map((_) => (
            <img className="w-4 mr-1" src={Star} alt="" key={_} />
          ))}
        </div>
        <div className="rounded-full border border-white ml-16 text-xl px-6 py-1 font-bold opacity-70">
          PG13
        </div>
      </div>
      <div className="mb-10 text-xl leading-8 w-full md:w-1/3">
        {description}
      </div>
      <div className="flex justify-around md:justify-start  text-xl  font-thin">
        <div className="flex items-center color-trailer md:mr-20 cursor-pointer">
          <img className="w-3 mr-3" src={Play} alt="" />
          <Link to={`/trailer/${id}`}>Watch Trailer</Link>
        </div>
        <div className="flex items-center color-trailer md:mr-20 cursor-pointer">
          <img className="w-3 mr-3" src={Save} alt="" />
          Watch Later
        </div>
        <div className="flex items-center color-trailer cursor-pointer">
          <img className="w-3 mr-3" src={Share} alt="" />
          Share
        </div>
      </div>
      <div className="flex text-xl mt-10">
        <div>Kids</div>
        <div className="mx-5">&#8226;</div>
        <div>Fantasy Movie</div>
        <div className="mx-5">&#8226;</div>
        <div>Action</div>
      </div>
    </div>
  );
};

export default Overview;
