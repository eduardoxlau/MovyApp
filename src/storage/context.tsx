import { createContext, Dispatch, useState } from 'react';
import { getPersistContext, setPersistContext } from 'storage/persist';

export const initialState = { isAuth: false };

export type User = {
  id: number;
  email: string;
  full_name: string;
  admin: boolean;
  photo_path: string;
};

export type Context = {
  isAuth?: boolean;
  user?: User;
  access_token?: string;
};

const UserContext = createContext<{
  context: Context;
  setContext: Dispatch<Context>;
}>({
  context: {},
  setContext: () => undefined,
});

const UserContextProvider = ({ children }: { children: any }) => {
  const [context, setContext] = useState<Context>(getPersistContext());

  const persistContext = (data: Context) => {
    setPersistContext(data);
    setContext(data);
  };

  return (
    <UserContext.Provider value={{ context, setContext: persistContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
