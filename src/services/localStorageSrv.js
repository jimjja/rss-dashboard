export const setItem = ({ key, value }) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export const deleteItem = key => localStorage.deleteItem(key);
