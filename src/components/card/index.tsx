import { FunctionComponent } from "react";

type CardProps = {
  img?: string;
};

const Card: FunctionComponent<CardProps> = ({ img }) => {
  return (
    <div className="card m-0.5 hover:z-10 overflow-hidden transform transition duration-500 hover:scale-110 cursor-pointer">
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
