export const setItem = (key, value) => {
  return localStorage.setItem(JSON.stringify(key, value));
};

export const getItem = (key) => {
  return localStorage.getItem(key);
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
