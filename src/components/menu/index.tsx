import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Logo from "./../../assets/logo.png";
import User from "./../../assets/user.png";
import Look from "./../../assets/icons/look.png";
import Arrow from "./../../assets/icons/arrow.png";

const items = ["Home", "Movies", "Series", "Recently Added", "My list"];

type MenuProps = {
  isAuth?: boolean;
};

const Menu: FunctionComponent<MenuProps> = ({ isAuth = false }) => {
  const itemsAuth = (
    <div className="mt-5 md:m-0 flex flex-1 flex-col md:flex-row items-center">
      {items.map((item, index) => (
        <div key={item + index} className="mx-5">
          {item}
        </div>
      ))}
      <div className="mt-5 md:m-0 md:ml-auto flex items-center">
        <img src={Look} alt="" />
        <div className="bg-button mx-5 p-0.5 rounded-full">
          <img className="w-12" src={User} alt="" />
        </div>

        <img src={Arrow} alt="" />
      </div>
    </div>
  );

  const itemNotAuth = (
    <>
      <div className="md:ml-auto md:mr-11">
        <Link to="/profile">Register</Link>
      </div>
      <div className="bg-button px-10 py-1.5 rounded">
        <Link to="/login">Login</Link>
      </div>
    </>
  );

  return (
    <div className="absolute w-full">
      <div className="container  mx-auto flex text-white items-center pt-12 text-lg flex-col md:flex-row">
        <div className="md:mr-14">
          <img className="w-16" src={Logo} alt="" />
        </div>
        {isAuth ? itemsAuth : itemNotAuth}
      </div>
    </div>
  );
};

export default Menu;
