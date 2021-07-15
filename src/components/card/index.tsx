type CardProps = {
  img: string;
};

const Card = ({ img }: CardProps) => (
  <div className="card m-0.5 hover:z-10 overflow-hidden transform transition duration-500 hover:scale-110 cursor-pointer">
    <img src={img} alt="" />
  </div>
);

export default Card;
