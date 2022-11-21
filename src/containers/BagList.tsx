import React from "react";
import { observer } from "mobx-react-lite";
import shop from "../store/shop";
import { BagItem } from "../components/BagItem";

export const BagList = observer(() => {
  const createOnAdd = (productId: string) => () => {
    shop.addItemToBag(productId);
  };
  const createOnDelete = (productId: string) => () => {
    shop.deleteItemFromBag(productId);
  };
  const createOnDeleteAll = (productId: string) => () => {
    shop.deleteItemAllFromBag(productId);
  };

  return (
    <React.Fragment>
      {shop.bagList.map(({ productId, ...bagItem }) => (
        <BagItem
          key={productId}
          {...bagItem}
          onAdd={createOnAdd(productId)}
          onDelete={createOnDelete(productId)}
          onDeleteAll={createOnDeleteAll(productId)}
        />
      ))}
    </React.Fragment>
  );
});

BagList.displayName = "BagList";
