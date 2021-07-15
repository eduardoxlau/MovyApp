import Card from 'components/card';

import Card1 from 'assets/card1.png';
import Card2 from 'assets/card2.png';
import Card3 from 'assets/card3.png';

const cards: string[] = [Card1, Card2, Card3, Card1];

const MyList = () => (
  <div className="bg-black flex flex-col flex-grow">
    <div className="container mx-auto mt-20">
      <div className="text-white mt-11">
        <div className="text-3xl">My List</div>
        <div className="flex my-7 w-full overflow-scroll items-center container-card">
          {cards.map((card) => (
            <Card img={card} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MyList;
