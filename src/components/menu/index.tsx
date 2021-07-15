import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import User from 'assets/user.png';
import Look from 'assets/icons/look.png';
import Arrow from 'assets/icons/arrow.png';

const items = ['Home', 'Movies', 'Series', 'Recently Added', 'My list'];

type MenuProps = {
  isAuth?: boolean;
};

const Menu = ({ isAuth }: MenuProps) => {
  const [isOpen, setMenu] = useState(false);

  const itemsAuth = (
    <div className="justify-center flex flex-1 flex-col md:flex-row items-center">
      {items.map((item) => (
        <div key={item} className="mx-5 my-4 md:my-0">
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
    <div className="flex flex-col md:flex-row justify-center items-center flex-grow">
      <div className="m-10 md:ml-auto md:mr-11">
        <Link to="/profile">Register</Link>
      </div>
      <div className="bg-button px-10 py-1.5 rounded">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );

  return (
    <div className="absolute w-full">
      <div className="container  mx-auto flex text-white items-center pt-12 text-4xl md:text-lg flex-col md:flex-row">
        <div className="md:mr-14">
          <img className="w-16" src={Logo} alt="" />
        </div>
        <div
          className={`z-20  md:hidden p-5 fixed flex flex-col justify-around p-0.5 rounder cursor-pointer inset-10 w-10 h-10 ${
            isOpen ? 'toggle fixed' : 'absolute'
          }`}
          onClick={() => setMenu((prev) => !prev)}
        >
          <div className="w-full h-0.5 bg-white duration-300 line1" />
          <div className="w-full h-0.5 bg-white duration-300 line2" />
          <div className="w-full h-0.5 bg-white duration-300 line3" />
        </div>
        <div
          className={`bg-black md:bg-transparent flex flex-grow fixed left-0 top-0 h-full md:h-auto flex-col md:flex-row md:relative z-10 duration-500 truncate ${
            isOpen ? 'w-full' : 'w-0'
          }`}
        >
          {isAuth ? itemsAuth : itemNotAuth}
        </div>
      </div>
    </div>
  );
};

Menu.defaultProps = {
  isAuth: false,
};
export default Menu;
