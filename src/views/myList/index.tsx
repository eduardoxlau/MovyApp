import { useQuery } from '@apollo/client';

import { GET_LISTS } from 'graphql/queries';
import Card, { ItemInterface } from 'components/card';

const MyList = () => {
  let lists: { name: string; movies: ItemInterface[] }[] = [];

  const { data } = useQuery(GET_LISTS);

  if (data) lists = data.getLists;

  return (
    <div className="bg-black flex flex-col flex-grow">
      <div className="container mx-auto mt-20">
        {lists.map(({ name, movies }) => (
          <div className="text-white mt-11">
            <div className="text-3xl">{name}</div>
            <div className="flex my-7 w-full overflow-scroll items-center container-card">
              {movies.map((item: ItemInterface, index: number) => (
                <div className="mx-1">
                  <Card item={item} scale index={index} />
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
