import { BAG_LOCAL_STORAGE_KEY } from "../constants";
import { getFromLocalStorage } from "./localStorage";
import { isBag } from "./isBag";

export const getSavedBag = () => {
  const savedBag = getFromLocalStorage(BAG_LOCAL_STORAGE_KEY);

  if (!isBag(savedBag)) {
    return {};
  }

  return savedBag;
};
