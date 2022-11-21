import React from "react";
import { observer } from "mobx-react-lite";
import { Price } from "../components/Price";
import shop from "../store/shop";

type PriceWithColorProps = {
  price: string;
};
export const PriceWithColor = observer(({ price }: PriceWithColorProps) => {
  const { usdRateFall } = shop;

  return <Price price={price} rateFall={usdRateFall} />;
});

PriceWithColor.displayName = "PriceWithColor";
