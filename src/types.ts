// products.json
export type Product = {
  C: number; // price
  G: number; // group id
  T: number; // product id
  P: number; // quantity
  B: boolean;
  CV: null;
  Pl: null;
};

export type Products = {
  Error: string;
  Id: number;
  Success: boolean;
  Value: {
    Goods: Product[];
  };
};

// names.json
type Name = {
  N: string; // product name
  T: number;
};

type Group = {
  G: string; // group name
  B: {
    // key is product id
    [key: string]: Name;
  };
};

export type Names = {
  // key is group id
  [key: string]: Group;
};

// UI types
export type TrasformedProduct = {
  price: number;
  groupId: string;
  productId: string;
  quantity: number;
};

export type TrasformedProducts = {
  // key is product id
  [key: string]: TrasformedProduct;
};

export type TrasformedNames = {
  // key is group id
  [key: string]: {
    groupName: string; // group name
    items: {
      // key is product id
      [key: string]: string;
    };
  };
};

export type Bag = {
  // key is product id, value is quantity
  [key: string]: number;
};
