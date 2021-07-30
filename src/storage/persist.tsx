import { Context, initialState } from './context';

const PERSIST_CONTEXT = 'persist_context';

export const getPersistContext = (): Context => {
  if (localStorage.getItem(PERSIST_CONTEXT) === null) return initialState;

  return JSON.parse(localStorage.getItem(PERSIST_CONTEXT) || '{}');
};

export const getAccessToken = () => getPersistContext().access_token;

export const setPersistContext = (data: Context) =>
  localStorage.setItem(PERSIST_CONTEXT, JSON.stringify(data));

export const signOut = () =>
  localStorage.setItem(PERSIST_CONTEXT, JSON.stringify(initialState));
