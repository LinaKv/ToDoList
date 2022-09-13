export const setLocalStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

export const getLocalStorage = () => {
  let keys = Object.keys(localStorage);

  return keys.map((key) => ({
    id: key,
    text: JSON.parse(localStorage.getItem(key)).text,
    date: JSON.parse(localStorage.getItem(key)).date,
  }));
};

export const getStrDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const min = date.getMinutes();
  return `${hours}:${min} ${day}/${month}/${year}`;
};
