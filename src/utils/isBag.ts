import { Bag } from "./../types";

// Bag type guard
export const isBag = (obj: Object): obj is Bag => {
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    return keys.length === 0 || typeof obj[firstKey] === "number";
  }
  return false;
};
