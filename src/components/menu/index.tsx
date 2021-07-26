import classNames from 'classnames';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from 'assets/logo.png';
import User from 'assets/user.png';
import Look from 'assets/icons/look.png';
import { signOut } from 'storage/persist';
import Arrow from 'assets/icons/arrow.png';
import { UserContext } from 'storage/context';

const items = [
  { name: 'Home', path: '/home' },
  { name: 'Movies', path: '/movies' },
  { name: 'Series', path: '/series' },
  { name: 'Recently Added', path: '/recently' },
  { name: 'My list', path: '/my-list' },
];

const Menu = () => {
  const { context, setContext } = useContext(UserContext);
  const { isAuth } = context;
  const [isOpen, setMenu] = useState(false);
  const [isSettingOpen, setSetting] = useState(false);

  const itemsAuth = (
    <div className="justify-center flex flex-1 flex-col md:flex-row items-center md:items-start">
      {items.map(({ name, path }) => (
        <div className="mx-5 my-4 md:my-0" key={name}>
          <NavLink
            key={name}
            exact
            onClick={() => setMenu(false)}
            activeClassName="active-link-about"
            to={path}
          >
            {name}
          </NavLink>
        </div>
      ))}
      <div
        className="mt-5 md:m-0 md:ml-auto flex items-center flex-col justify-center"
        onMouseLeave={() => setSetting(false)}
      >
        <div className="flex items-center ">
          <img src={Look} alt="" />
          <div className="bg-button ml-5 p-0.5 rounded-full">
            <img className="w-12" src={User} alt="" />
          </div>
          <div
            className={classNames({
              'cursor-pointer p-5 transform duration-200': true,
              'rotate-180': isSettingOpen,
            })}
            onClick={() => setSetting((prev) => !prev)}
          >
            <img src={Arrow} alt="" />
          </div>
        </div>

        <div
          className={classNames({
            'flex text-center flex-col md:bg-blue-500 pt-4 pb-3 w-full rounded mt-3 text-2xl md:text-lg':
              true,
            hidden: !isSettingOpen,
          })}
        >
          <div
            className="hover:font-bold cursor-pointer"
            onClick={() => {
              setSetting(false);
              setMenu(false);
            }}
          >
            <Link to="/profile">Profile</Link>
          </div>
          <div
            className="hover:font-bold cursor-pointer"
            onClick={() => {
              setSetting(false);
              setContext({ isAuth: false });
              signOut();
            }}
          >
            <Link to="/">Sign Out</Link>
          </div>
        </div>
      </div>
    </div>
  );

  const itemNotAuth = (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start  flex-grow">
      <div className="flex items-center md:h-full my-10 md:my-0 md:mx-10 md:ml-auto md:mr-11">
        <Link to="/">Register</Link>
      </div>
      <div className="bg-button px-10 py-1.5 rounded">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );

  return (
    <div className="absolute w-full">
      <div className="container  mx-auto flex text-white items-center md:items-start pt-12 text-4xl md:text-lg flex-col md:flex-row">
        <div className="md:mr-14 z-10">
          <Link to="/home">
            <img className="w-16" src={Logo} alt="" />
          </Link>
        </div>
        <div
          className={`z-30 md:hidden p-5 fixed flex flex-col justify-around p-0.5 rounder cursor-pointer inset-10 w-10 h-10 ${
            isOpen ? 'toggle fixed' : 'absolute'
          }`}
          onClick={() => setMenu((prev) => !prev)}
        >
          <div className="w-full h-0.5 bg-white duration-300 line1" />
          <div className="w-full h-0.5 bg-white duration-300 line2" />
          <div className="w-full h-0.5 bg-white duration-300 line3" />
        </div>
        <div
          className={`bg-black md:bg-transparent flex flex-grow fixed left-0 top-0 h-full md:h-auto flex-col md:flex-row md:relative z-20 md:z-10 duration-500 truncate ${
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
  isAuth: true,
};
export default Menu;
