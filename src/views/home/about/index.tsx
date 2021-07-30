/* eslint-disable jsx-a11y/iframe-has-title */
import { Route, NavLink } from 'react-router-dom';
import { ItemInterface } from 'components/card';

import Overview from './overview';
import Details from './details';
import More from './more';

const About = ({ item }: { item: ItemInterface }) => {
  const { backdrop_url } = item;
  return (
    <div
      className="w-full relative bg-cover md:bg-contain bg-no-repeat bg-center md:bg-right bg-center flex flex-col"
      style={{
        backgroundImage: `url("${backdrop_url}")`,
        minHeight: '700px',
      }}
    >
      <div className="w-full h-20 bglinear-black-180" />
      <div className="z-0 w-full h-full absolute bglinear-black-left" />
      <Route exact path="/home">
        <Overview {...item} />
      </Route>
      <Route path="/home/more">
        <More />
      </Route>
      <Route path="/home/details">
        <Details {...item} />
      </Route>
      <div className="z-10 mt-20 flex justify-around md:justify-center  text-xl font-bold">
        <div className="md:mx-8 pb-1 ">
          <NavLink exact activeClassName="active-link-about" to="/home/">
            OVERVIEW
          </NavLink>
        </div>
        <div className="md:mx-8 pb-1">
          <NavLink activeClassName="active-link-about" to="/home/more">
            MORE LIKE THIS
          </NavLink>
        </div>
        <div className="md:mx-8 pb-1">
          <NavLink activeClassName="active-link-about" to="/home/details">
            DETAILS
          </NavLink>
        </div>
      </div>

      <div className="w-full h-20 bglinear-black flex flex-grow" />
    </div>
  );
};

export default About;
