import Fb from "../../assets/icons/fb.png";

import Input from "../../components/input/light";

const Login = () => {
  return (
    <div className="flex flex-col bg-logo bg-cover">
      <div className="container flex-grow flex-shrink mx-auto mt-44">
        <div className="bg-black text-white m-auto px-12 py-12 w-auto md:w-login bg-opacity-80 rounded">
          <div className="text-4xl text-center">Inicia sesión</div>
          <div className="my-9">
            <Input placeholder="Email o número de teléfono" />
            <Input placeholder="Contraseña" type="password" />
          </div>
          <button className="bg-button w-full h-11 text-center rounded">
            Iniciar sesión
          </button>
          <div className="flex items-center my-3">
            <div className="w-1/2 flex">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-5 w-5 h-5 bg-coolGray-400"
                />
              </div>
              Recuerdame
            </div>
            <div className="w-1/2 flex justify-end">Necesitas ayuda?</div>
          </div>
          <div className="my-10 flex justify-center items-center">
            <img src={Fb} alt="" className="mr-4" />
            Iniciar sesión con Facebook
          </div>
          <div className="text-center">
            ¿Primera vez en Movy?
            <span className="font-bold">Suscríbete ya.</span>
          </div>
        </div>
      </div>
      <div className="h-40 bglinear-black" />
    </div>
  );
};

export default Login;
