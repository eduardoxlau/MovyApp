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

const AppContext = createContext<{
  context: Context;
  setContext: Dispatch<Context>;
}>({
  context: {},
  setContext: () => undefined,
});

const AppContextProvider = ({ children }: { children: any }) => {
  const [context, setContext] = useState<Context>(getPersistContext());

  const persistContext = (data: Context) => {
    setPersistContext(data);
    setContext(data);
  };

  return (
    <AppContext.Provider value={{ context, setContext: persistContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
