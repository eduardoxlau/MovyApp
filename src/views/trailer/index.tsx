import { useQuery } from '@apollo/client';

import Loading from 'components/loading';
import { GET_MOVIE } from 'graphql/queries';
import { ItemInterface } from 'components/card';

import Star from 'assets/icons/star.png';
import Save from 'assets/icons/save.png';
import Camera from 'assets/icons/camera.png';
import { useParams } from 'react-router-dom';

const Trailer = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id, 10) },
  });

  if (loading) return <Loading />;

  const movie: ItemInterface = data.getMovie;

  return (
    <div className="bg-black flex flex-col flex-grow text-white">
      <div className="container mx-auto my-40">
        <div className="flex">
          <div>2019 . Action, Thiller</div>
          <div className="flex items-center ml-20">
            <img className="w-5 mr-3" src={Save} alt="" />
            Watch Later
          </div>
        </div>

        <div className="text-6xl font-black ">{movie?.title}</div>
        <div className="flex mt-3 mb-16 items-center justify-around md:justify-start">
          <div
            className="bg-pink-600 px-2 py-0.5 rounded md:mr-5 text-sm flex items-center"
            style={{ height: 'fit-content' }}
          >
            2.30h
          </div>
          <div className="mx-10 md:mr-6 text-lg flex items-center text-center flex-col md:flex-row">
            <img className="w-6 mr-3" src={Camera} alt="" />
            <div>Quentien cuarentino</div>
          </div>
          <div className="flex items-center">
            {Array(movie?.stars)
              .fill('')
              .map(() => (
                <img className="w-4 mr-1" src={Star} alt="" />
              ))}
          </div>
        </div>
        <div
          className="w-2/3 overflow-hidden relative m-auto"
          style={{ height: '500px' }}
        >
          {movie?.trailer_url && (
            <iframe
              width="100%"
              className="w-full h-full absolute"
              height="auto"
              src={movie?.trailer_url}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Trailer;
