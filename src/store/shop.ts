import axios from "axios";
import { makeAutoObservable, autorun } from "mobx";
import { BAG_LOCAL_STORAGE_KEY } from "../constants";
import {
  Names,
  Products,
  TrasformedProducts,
  TrasformedNames,
  Bag,
} from "../types";
import { transformProducts, transformNames } from "../utils/transforms";
import { getRandomRate } from "../utils/getRandomRate";
import { saveToLocalStorage } from "../utils/localStorage";
import { getSavedBag } from "../utils/getSavedBag";
import { formatMoney } from "../utils/formatMoney";

class Shop {
  loading: boolean = false;
  error: boolean = false;

  products: TrasformedProducts | null = null;
  names: TrasformedNames | null = null;

  savedBagLoaded: boolean = false;
  bag: Bag = {};

  usdRate: number = getRandomRate();
  usdRateFall: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  // bag
  setPreviousBag() {
    this.bag = getSavedBag();
    this.savedBagLoaded = true;
  }
  addItemToBag(productId) {
    if (
      this.bag[productId] &&
      this.products &&
      this.bag[productId] < this.products[productId].quantity
    ) {
      this.bag[productId] += 1;
      return;
    }
    this.bag[productId] = 1;
  }
  deleteItemFromBag(productId) {
    if (this.bag[productId] > 1) {
      this.bag[productId] -= 1;
      return;
    }
    delete this.bag[productId];
  }
  deleteItemAllFromBag(productId) {
    delete this.bag[productId];
  }
  clearBag() {
    this.bag = {};
  }

  get bagPositionQuantity() {
    return (this.products && this.names) ? Object.keys(this.bag).length : 0;
  }
  get bagTotalPrice() {
    const bagEntries = Object.entries(this.bag);

    if (bagEntries.length === 0 || !this.products || !this.names) {
      return 0;
    }

    const products = this.products;
    let total = 0;
    bagEntries.forEach(([productId, quantity]) => {
      total += quantity * products[productId].price;
    });

    return formatMoney(total * this.usdRate);
  }

  get bagList() {
    const bagEntries = Object.entries(this.bag);

    if (bagEntries.length === 0 || !this.products || !this.names) {
      return [];
    }

    const products = this.products;
    const names = this.names;

    return bagEntries.map(([productId, currentQuantity]) => {
      const groupId = products[productId].groupId;
      const name = names[groupId].items[productId];
      const price = formatMoney(products[productId].price * this.usdRate);
      const allQuantity = products[productId].quantity;
      const disableAdd = currentQuantity === allQuantity;

      return {
        productId,
        name,
        currentQuantity,
        price,
        disableAdd,
      };
    });
  }

  // usdRate
  changeUsdRate() {
    const newRate = getRandomRate();
    this.usdRateFall = newRate < this.usdRate;
    this.usdRate = newRate;
  }

  // products
  get productList() {
    if (!this.products || !this.names) {
      return [];
    }
    const products = this.products;
    const names = this.names;

    const noEmptyGroupIds = Object.keys(names).filter((groupId) => {
      const groupHaveIdFromProducts = Object.keys(names[groupId].items).some(
        (productId) => products[productId]
      );
      return groupHaveIdFromProducts;
    });

    return noEmptyGroupIds.map((groupId) => {
      const groupName = names[groupId].groupName;
      const items = Object.entries(names[groupId].items)
        .filter(([productId]) => products[productId])
        .map(([productId, name]) => {
          const allQuantity = products[productId].quantity;
          const price = formatMoney(this.usdRate * products[productId].price);
          const currentQuantity = this.bag[productId] ?? 0;
          const disableAdd = currentQuantity === allQuantity;

          return {
            productId,
            name,
            currentQuantity,
            allQuantity,
            price,
            disableAdd,
          };
        });
      return {
        groupId,
        groupName,
        items,
      };
    });
  }

  // fetch data
  fetchData() {
    this.loading = true;

    axios
      .get<Names>("/names")
      .then(({ data }) => {
        this.names = transformNames(data);
      })
      .then(() => axios.get<Products>("/products"))
      .then(({ data }) => {
        const trasformedProducts = transformProducts(data);
        this.products = trasformedProducts;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

const shop = new Shop();

autorun(() => {
  if (shop.savedBagLoaded) {
    saveToLocalStorage(BAG_LOCAL_STORAGE_KEY, shop.bag);
  }
});

export default shop;
