export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    localStorage.setItem(key, item);
  }
};

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return localStorage.getItem(key);
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const removeItems = (item) => {
  localStorage.removeItem(item);
};
