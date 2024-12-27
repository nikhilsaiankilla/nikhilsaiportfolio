import store from './store';

export const getToken = () => {
  const state = store.getState();
  const tokenFromRedux = state.auth.token;

  // Prefer token from Redux, fallback to localStorage
  return tokenFromRedux || localStorage.getItem('authToken');
};
