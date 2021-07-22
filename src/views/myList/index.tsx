import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Loading from 'components/loading';
import { GET_LISTS } from 'graphql/queries';
import Card, { ItemInterface } from 'components/card';

const MyList = () => {
  const { data, loading } = useQuery(GET_LISTS);

  if (loading) return <Loading />;

  const lists: { name: string; movies: ItemInterface[] }[] = data.getLists;

  return (
    <div className="bg-black flex flex-col flex-grow">
      <div className="container mx-auto mt-20">
        {lists.map(({ name, movies }) => (
          <div className="text-white mt-11">
            <div className="text-3xl">{name}</div>
            <div className="flex my-7 w-full overflow-scroll items-center container-card">
              {movies.map((item: ItemInterface, index: number) => (
                <div className="mx-1 cursor-pointer">
                  <Link to={`/trailer/${item.id}`}>
                    <Card item={item} scale index={index} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
