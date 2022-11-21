export const saveToLocalStorage = (key: string, value: Object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): Object => {
  const item = localStorage.getItem(key);
  if (!item) {
    return {};
  }

  return JSON.parse(item);
};
