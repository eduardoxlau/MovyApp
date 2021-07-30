import Star from 'assets/icons/star.png';
import Imdb from 'assets/icons/imdb.png';
import Save from 'assets/icons/save.png';
import { ItemInterface } from 'components/card';

const Preview = (item: ItemInterface) => {
  const { backdrop_url, title, stars } = item;
  return (
    <div
      className="w-full relative bg-cover bg-top bg-center flex flex-col"
      style={{
        backgroundImage: `url("${backdrop_url}")`,
        minHeight: '600px',
      }}
    >
      <div className="z-10">
        <div className="w-full h-20 bglinear-black-180" />
        <div className="flex container mx-auto flex-col md:flex-row">
          <div className="md:w-3/5 m-10 flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uXGE0vuuaDo"
            />
          </div>
          <div className="container flex flex-col md:w-2/5 mx-auto flex-grow">
            <div className="flex py-6 items-center">
              <div className="opacity-80 text-3xl">A Movie Film</div>
              <div className="rounded-full border border-white ml-auto text-xl px-6 py-1 font-bold opacity-70">
                PG13
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row">
              <div className="text-5xl font-black mb-2">{title}</div>
            </div>

            <div className="flex mt-6 mb-5 items-center">
              <div
                className="flex items-center color-trailer bg-white px-4 py-1 mr-10"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <img className="w-3 mr-3" src={Save} alt="" />
                Watch Later
              </div>
              <div className="flex items-center">
                {Array.from(Array(stars).keys()).map((_) => (
                  <img className="w-4 mr-1" src={Star} alt="" key={_} />
                ))}
              </div>
            </div>
            <div className="mb-10 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae odio, dolorum architecto delectus facere commodi
              deserunt iure cumque unde. Eveniet atque vel sed possimus dolores
              facere fugiat corrupti illo.
            </div>
            <img className="w-20" src={Imdb} alt="" />
          </div>
        </div>
        <div className="w-full h-20 bglinear-black flex flex-grow" />
      </div>

      <div className="w-full h-full absolute bg-black opacity-50 z-0" />
    </div>
  );
};

export default Preview;
