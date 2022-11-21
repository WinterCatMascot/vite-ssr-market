/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { observer } from "mobx-react-lite";
import shop from "../store/shop";
import React from "react";
import { Product } from "../components/Product";

const groupTitle = css`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
`;

export const ProductList = observer(() => {
  const createAddToBag = (productId: string) => () => {
    shop.addItemToBag(productId);
  };
  const createOnDelete = (productId: string) => () => {
    shop.deleteItemFromBag(productId);
  };

  return (
    <React.Fragment>
      {shop.productList.map(({ groupId, groupName, items }) => (
        <div key={groupId}>
          <p css={groupTitle}>{groupName}</p>
          <div>
            {items.map(
              ({
                productId,
                price,
                currentQuantity,
                disableAdd,
                allQuantity,
                name,
              }) => (
                <Product
                  key={productId}
                  name={name}
                  currentQuantity={currentQuantity}
                  disableAdd={disableAdd}
                  allQuantity={allQuantity}
                  price={price}
                  onAdd={createAddToBag(productId)}
                  onDelete={createOnDelete(productId)}
                />
              )
            )}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
});

ProductList.displayName = "ProductList";
