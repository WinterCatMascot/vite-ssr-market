/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import React from "react";
import { observer } from "mobx-react-lite";
import shop from "../store/shop";
import { BuyButton } from "../components/BuyButton";
import { Button } from "../components/Button";
import { ReactComponent as CancelIcon } from "../icons/cancel.svg";
import { BagList } from "./BagList";

const wrapper = css`
  width: 500px;
  border-left: 1px solid #000;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  right: 0;
  top: 0;
  background-color: #fff;
  padding: 32px 24px;
  box-sizing: border-box;
`;
const headerWrapper = css`
  margin-bottom: 32px;
  display: flex;
`;
const title = css`
  font-weight: 600;
  font-size: 28px;
  margin-right: auto;
`;
const total = css`
  font-weight: 600;
  font-size: 28px;
  margin: 32px 0 24px 0;
`;

export const ShoppingBag = observer(() => {
  const clearBag = () => {
    shop.clearBag();
  };
  const handleBuy = () => {
    alert("Coming soon...");
  };

  const bagIsEmpty = !shop.bagPositionQuantity;
  const selectedPositions = !bagIsEmpty ? `(${shop.bagPositionQuantity})` : "";

  return (
    <div css={wrapper}>
      <div css={headerWrapper}>
        <p css={title}>Корзина {selectedPositions}</p>
        {!bagIsEmpty && (
          <Button mode="icon" color="secondary" onClick={clearBag}>
            <CancelIcon />
          </Button>
        )}
      </div>

      <BagList />

      {!bagIsEmpty && (
        <React.Fragment>
          <BuyButton onClick={handleBuy} />
          <p css={total}>Итого: {shop.bagTotalPrice}</p>
        </React.Fragment>
      )}
    </div>
  );
});

ShoppingBag.displayName = "ShoppingBag";
