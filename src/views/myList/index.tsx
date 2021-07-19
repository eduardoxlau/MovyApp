import Card from 'components/card';
import { movies } from 'mocks/movies';

const MyList = () => (
  <div className="bg-black flex flex-col flex-grow">
    <div className="container mx-auto mt-20">
      <div className="text-white mt-11">
        <div className="text-3xl">My List</div>
        <div className="flex my-7 w-full overflow-scroll items-center container-card">
          {movies.map((item, index) => (
            <div className="mx-1">
              <Card item={item} scale index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MyList;
