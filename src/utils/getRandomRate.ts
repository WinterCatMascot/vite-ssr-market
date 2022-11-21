import { MAX_RATE, MIN_RATE } from "../constants";

export const getRandomRate = () => {
  const randomNumber = Math.random() * (MAX_RATE - MIN_RATE) + MIN_RATE;
  const formatedNumber = Math.floor(randomNumber * 100) / 100; // for example 100.99

  return formatedNumber;
};
