import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import Input from 'components/input';
import ProfileImg from 'assets/profile.png';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Notification from 'components/notification';
import { UserContext, User } from 'storage/context';
import { REMOVE_USER, UPDATE_USER } from 'graphql/mutations';

const Profile = () => {
  const history = useHistory();
  const { context, setContext } = useContext(UserContext);
  const { user } = context;

  const [formData, updateFormData] = useState<User>(user as User);

  const [setUser, { loading, data, error }] = useMutation(UPDATE_USER, {
    errorPolicy: 'all',
  });

  const [removeUser, { loading: loadingRemove, error: errorRemove }] =
    useMutation(REMOVE_USER, {
      errorPolicy: 'all',
    });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setUser({
      variables: {
        input: {
          full_name: formData.full_name,
          photo_path: formData.photo_path,
        },
      },
    });
    setContext({ ...context, user: formData });
  };

  const onRemoveUser = async () => {
    await removeUser();
    setContext({ isAuth: false });
    history.push('/');
  };

  return (
    <div className="bg-mate flex flex-col">
      <form className="container text-white profile" onSubmit={onSubmit}>
        <div className="text-5xl mb-4 text-center md:text-left">
          Edit Profile
        </div>
        <hr className="separator" />
        <div className="flex flex-col md:flex-row my-11">
          <div className="w-full md:w-1/3 flex items-center justify-center md:items-start md:justify-start mb-4 m:m-0">
            <div className="flex items-center justify-center w-40 h-40 bg-gray-200 rounded">
              <img
                className="w-32"
                src={user?.photo_path || ProfileImg}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-2/3 text-2xl">
            <div className="flex flex-col  mb-1">
              <div className="">Name:</div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4">
                  <Input
                    theme="dark"
                    value={formData?.full_name}
                    name="full_name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center my-1 md:m-0">
                  <input
                    className="mr-6 md:mx-6 w-8 h-8 order-1 md:order-none"
                    type="checkbox"
                    name="isKid"
                  />
                  <div className="mr-10">Kid?</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">Image url:</div>
              <div className="w-full md:w-3/4">
                <Input
                  theme="dark"
                  name="photo_path"
                  required
                  value={formData?.photo_path}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="mb-1">Language:</div>
              <select className="bg-black w-full md:w-60 h-10 p-2 text-lg rounded border border-button">
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <div className="mb-1">Allowed TV shows and movies:</div>
              <select className="bg-black w-full md:w-60  h-10 p-2 text-lg rounded border border-button">
                <option value="en">All Maturity levels</option>
                <option value="es">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          {(error || data || errorRemove) && (
            <Notification
              isError={!!error || !!errorRemove}
              message={
                error?.message || errorRemove?.message || 'Save Sucessfull'
              }
            />
          )}
        </div>
        <hr className="separator" />
        <div className="mt-5">
          <input
            type="submit"
            disabled={loading}
            className={`py-1.5 px-8 rounded m-1 w-full md:w-auto ${
              loading ? 'bg-blue-300' : 'bg-button'
            }`}
            value="SAVE"
          />
          <button
            type="button"
            className="border-button border py-1.5 px-8 rounded m-1 w-full  md:w-auto"
          >
            CANCEL
          </button>
          <button
            onClick={onRemoveUser}
            type="button"
            disabled={loadingRemove}
            className="border-button border py-1.5 px-8 rounded m-1 w-full md:w-auto"
          >
            DELETE PROFILE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
