/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { observer } from "mobx-react-lite";
import shop from "../store/shop";
import { formatMoney } from "../utils/formatMoney";
import { PriceWithColor } from "./PriceWithColor";
import { ProductList } from "./ProductList";

const wrapper = css`
  box-sizing: border-box;
  width: calc(100% - 500px);
  padding: 32px 24px;
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

export const Products = observer(() => (
  <div css={wrapper}>
    <div css={headerWrapper}>
      <p css={title}>Список товаров</p>
      <PriceWithColor price={`1$ = ${formatMoney(shop.usdRate)}`} />
    </div>

    <ProductList />
  </div>
));

Products.displayName = "Products";
