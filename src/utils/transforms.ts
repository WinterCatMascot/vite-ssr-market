import { Products, Names, TrasformedProducts, TrasformedNames } from "../types";

export const transformProducts = (products: Products): TrasformedProducts => {
  const productsMap = {};
  products.Value.Goods.forEach(({ T, G, C, P }) => {
    const productId = String(T);
    productsMap[productId] = {
      productId: productId,
      groupId: String(G),
      price: C,
      quantity: P,
    };
  });

  return productsMap;
};

export const transformNames = (names: Names): TrasformedNames => {
  const namesMap = {};
  Object.keys(names).forEach((groupId) => {
    const items = {};
    Object.keys(names[groupId].B).forEach((productId) => {
      items[productId] = names[groupId].B[productId].N;
    });

    namesMap[groupId] = {
      groupName: names[groupId].G,
      items: items,
    };
  });

  return namesMap;
};
