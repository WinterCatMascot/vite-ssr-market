/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { PriceWithColor } from "../containers/PriceWithColor";
import { Button } from "./Button";
import { Line } from "./Line";
import { Quantity } from "./Quantity";

const productName = css`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 16px;
`;
const btnsWrapper = css`
  display: flex;
  margin-bottom: 16px;
`;
const gap = css`
  width: 24px;
`;

type ProductProps = {
  name: string;
  allQuantity: number;
  currentQuantity: number;
  disableAdd: boolean;
  price: string;
  onAdd: () => void;
  onDelete: () => void;
};
export const Product = observer(
  ({
    onAdd,
    onDelete,
    name,
    currentQuantity,
    allQuantity,
    disableAdd,
    price,
  }: ProductProps) => {
    return (
      <div>
        <p css={productName}>{name}</p>
        <div css={btnsWrapper}>
          {currentQuantity === 0 ? (
            <Button onClick={onAdd}>В корзину</Button>
          ) : (
            <Quantity
              onAdd={onAdd}
              onDelete={onDelete}
              currentQuantity={currentQuantity}
              disableAdd={disableAdd}
            />
          )}
          <PriceWithColor price={price} />
          <div css={gap} />
          <Button color="secondary">{allQuantity}</Button>
        </div>

        <Line />
      </div>
    );
  }
);

Product.displayName = "Product";

