import Star from 'assets/icons/star.png';
import Play from 'assets/icons/play.png';
import Imdb from 'assets/icons/imdb.png';
import Save from 'assets/icons/save.png';
import Sound from 'assets/icons/sound.png';
import Camera from 'assets/icons/camera.png';

import BlackMirrorImg from 'assets/black_mirror.png';

const Trailer = () => (
  <div
    className="w-full relative bg-cover bg-top bg-center flex flex-col"
    style={{
      backgroundImage: `url("${BlackMirrorImg}")`,
      minHeight: '600px',
    }}
  >
    <div className="w-full h-52 bglinear-black-180" />
    <div className="container flex flex-col md:w-4/5 mx-auto flex-grow">
      <div className="py-6 opacity-60">2019 . Action, Thiller</div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="text-6xl font-black opacity-80 mb-2">BLACK MIRROR</div>
        <div className="rounded-full border border-white mr-auto md:mr-0 md:ml-auto text-xl px-6 py-1 font-bold opacity-90">
          PG13
        </div>
      </div>

      <div className="flex my-8 items-center justify-around md:justify-start">
        <div
          className="bg-pink-600 px-2 py-0.5 rounded md:mr-20 text-sm flex items-center"
          style={{ height: 'fit-content' }}
        >
          2.30h
        </div>
        <div className="mx-10 md:mr-20 text-lg flex items-center text-center flex-col md:flex-row">
          <img className="w-6 mr-3" src={Camera} alt="" />
          <div>Quentien cuarentino</div>
        </div>
        <div className="flex items-center">
          <img className="w-4 mr-1" src={Star} alt="" />
          <img className="w-4 mr-1" src={Star} alt="" />
          <img className="w-4 mr-1" src={Star} alt="" />
          <img className="w-4 mr-1" src={Star} alt="" />
        </div>
      </div>
      <div className="mb-40 mt-10 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        odio, dolorum architecto delectus facere commodi deserunt iure cumque
        unde. Eveniet atque vel sed possimus dolores facere fugiat corrupti
        illo. Vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae odio, dolorum architecto delectus facere commodi deserunt
        iure cumque unde. Eveniet atque vel sed possimus dolores facere fugiat
        corrupti illo. Vitae!
      </div>
      <div className="flex flex-grow items-center text-lg color-trailer flex-col md:flex-row">
        <div className="flex font-thin">
          <div className="flex items-center">
            <img className="w-5 mr-3" src={Save} alt="" />
            Watch Later
          </div>
          <div className="flex items-center">
            <img className="w-5 md:ml-20 mr-3" src={Play} alt="" />
            Watch Trailer
          </div>
          <div className="flex items-center">
            <img className="w-20 md:ml-20 mr-3" src={Imdb} alt="" />
          </div>
        </div>

        <div className="mt-8 md:mt-0 mx-auto md:mr-0 md:ml-auto">
          <img className="w-8" src={Sound} alt="" />
        </div>
      </div>
    </div>
    <div className="w-full h-32 bglinear-black" />
  </div>
);

export default Trailer;
