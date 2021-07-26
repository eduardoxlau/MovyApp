import { LOGIN } from 'graphql/mutations';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState, useEffect, useContext } from 'react';

import Fb from 'assets/icons/fb.png';
import Input from 'components/input/light';
import { UserContext } from 'storage/context';
import Notification from 'components/notification';

const Login = () => {
  const { setContext } = useContext(UserContext);
  const history = useHistory();

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (data) {
      const {
        login: { access_token, user },
      } = data;
      setContext({ access_token, isAuth: true, user });
      history.push('/home');
    }
  }, [data]);

  const [formData, updateFormData] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ variables: { input: formData } });
  };
  return (
    <div className="flex flex-col bg-logo bg-cover">
      <form onSubmit={onSubmit}>
        <div className="container flex-grow flex-shrink mx-auto mt-44">
          <div className="bg-black text-white m-auto px-12 py-12 w-auto md:w-login bg-opacity-80 rounded">
            <div className="text-4xl text-center">Inicia sesión</div>
            <div className="my-9">
              <Input
                placeholder="Email o número de teléfono"
                name="email"
                type="email"
                required
                onChange={handleChange}
              />
              <Input
                placeholder="Contraseña"
                name="password"
                type="password"
                required
                onChange={handleChange}
              />
            </div>
            {error && <Notification message={error.message} />}
            <input
              disabled={loading}
              type="submit"
              className={`w-full h-11 text-center rounded cursor-pointer ${
                loading ? 'bg-blue-300' : 'bg-button'
              }`}
              value="Iniciar sesión"
            />
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
      </form>
    </div>
  );
};

export default Login;
