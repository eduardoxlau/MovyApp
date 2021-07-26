import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Loading from 'components/loading';

import Modal from 'components/modal';
import Add from 'assets/icons/add.png';
import Star from 'assets/icons/star.png';
import Save from 'assets/icons/save.png';
import Close from 'assets/icons/close.png';
import Camera from 'assets/icons/camera.png';
import { useParams } from 'react-router-dom';
import { ItemInterface } from 'components/card';
import { GET_MOVIE, GET_LISTS } from 'graphql/queries';
import { ADD_MOVIE_LIST, REMOVE_MOVIE_LIST } from 'graphql/mutations';

export type List = {
  id: number;
  name: string;
  description: string;
  public: boolean;
  movies: ItemInterface[];
};

const Trailer = () => {
  const [infoModal, setInfoModal] = useState<{
    show: boolean;
    list: List | null;
    isEdit: boolean;
  }>({
    show: false,
    list: null,
    isEdit: false,
  });

  const { id } = useParams<{ id: string }>();
  const [isOpenList, openList] = useState(false);

  const { data, loading } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id, 10) },
  });

  const { data: dataLists, loading: loadingLists } = useQuery(GET_LISTS);

  const lists: List[] = dataLists?.getLists;

  const [removeMovie, { loading: loadingRemoveMovie }] = useMutation(
    REMOVE_MOVIE_LIST,
    {
      errorPolicy: 'all',
    }
  );

  const [addMovie, { loading: loadingAddMovie }] = useMutation(ADD_MOVIE_LIST, {
    errorPolicy: 'all',
  });

  if (loading || loadingLists) return <Loading />;

  const movie: ItemInterface = data.getMovie;

  const list = lists.find(({ movies }) =>
    movies.some(({ id: movieId }) => movieId === movie.id)
  );

  const addMovieToList = async (listId: number) => {
    if (!loadingAddMovie) {
      addMovie({
        refetchQueries: [{ query: GET_LISTS }],
        variables: { input: { listId, movieId: movie.id } },
      });
    }
  };

  const removeMovieToList = () => {
    if (list && !loadingRemoveMovie) {
      removeMovie({
        refetchQueries: [{ query: GET_LISTS }],
        variables: { input: { listId: list.id, movieId: movie.id } },
      });
    }
  };

  return (
    <div className="bg-black flex flex-col flex-grow text-white">
      <div className="container mx-auto my-40">
        <div className="flex mb-4 flex-col md:flex-row">
          <div className="flex">
            <div>2019 . Action, Thiller</div>
            <div className="flex items-center ml-20">
              <img className="w-5 mr-3" src={Save} alt="" />
              Watch Later
            </div>
          </div>
          <div className="flex items-center mt-3 md:mt-0 md:ml-20 relative  ">
            {list ? (
              <div
                className="cursor-pointer flex"
                onClick={() => removeMovieToList()}
              >
                <img className="w-7  mr-3" src={Close} alt="" />
                Remove to list
              </div>
            ) : (
              <div onClick={() => openList((state) => !state)}>
                <div className="flex cursor-pointer">
                  <img className="w-7 h-7 mr-3" src={Add} alt="" />
                  add to list
                </div>
                <div
                  onMouseLeave={() => openList(false)}
                  className={`flex flex-col bg-blue-500 p-3 rounded top-8 min-w-full w-max text-center ${
                    isOpenList ? 'absolute' : 'hidden'
                  }`}
                >
                  {lists.map(({ name, id: listId }) => (
                    <div
                      className="cursor-pointer hover:font-bold"
                      onClick={() => addMovieToList(listId)}
                    >
                      {name}
                    </div>
                  ))}
                  <div
                    className="cursor-pointer font-bold  text-lg"
                    onClick={() => {
                      setInfoModal((prev) => ({
                        ...prev,
                        show: true,
                      }));
                    }}
                  >
                    Create new List
                  </div>
                </div>
              </div>
            )}
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
            {Array.from(Array(movie.stars).keys()).map((_) => (
              <img className="w-4 mr-1" src={Star} alt="" key={_} />
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
      {infoModal.show && (
        <Modal
          show={infoModal.show}
          edit={infoModal.isEdit}
          list={infoModal.list}
          onClose={() => {
            setInfoModal((prev) => ({
              ...prev,
              show: false,
            }));
          }}
        />
      )}
    </div>
  );
};

export default Trailer;
