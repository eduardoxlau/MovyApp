import { ItemInterface } from 'components/card';

const Details = (item: ItemInterface) => {
  const { title } = item;
  return (
    <div className="z-10 flex container mx-auto flex-col">
      <div className="flex pb-3 items-center text-3xl">A Movie Film </div>
      <div className="flex items-center flex-row text-5xl font-black mb-10">
        {title}
      </div>
      <div className="text-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex">
            <div className="mr-20">
              <div className="text-gray-300 mb-4">Creator</div>
              <div>James Cameron</div>
            </div>
            <div className="mr-20">
              <div className="text-gray-300 mb-4">Genres</div>
              <div>Fantasy</div>
              <div>Drama</div>
              <div>sadi</div>
            </div>
          </div>
          <div>
            <div className="mr-20">
              <div className="text-gray-300 mb-4">Maturity Ratings</div>
              <div className="rounded-full w-max bg-blue-500 text-xl px-6 py-1 mb-4 font-bold">
                PG13
              </div>
              <div>Recommended for ages 16 and up</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-300 mb-4">Cast</div>
          <div>Sam Worthington </div>
          <div>Zoe Saldaña</div>
          <div>Weaver Sigourney</div>
          <div>Michelle Rodríguez </div>
          <div> Stephen Lang</div>
          <div>Giovanni Ribisi</div>
          <div>Joel David </div>
          <div>Wes Studi Laz Alonso</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
