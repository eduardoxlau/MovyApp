const ACCESS_TOKEN = 'access_token';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const signOut = () => localStorage.setItem(ACCESS_TOKEN, '');
