/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { Button } from "./Button";
import { Line } from "./Line";
import { Quantity } from "./Quantity";
import { ReactComponent as CancelIcon } from "../icons/cancel.svg";
import { PriceWithColor } from "../containers/PriceWithColor";

const productName = css`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 16px;
`;

const wrapper = css`
  display: flex;
  margin-bottom: 16px;
`;
const cancelWrapper = css`
  margin-left: auto;
`;

type BagItemProps = {
  name: string;
  currentQuantity: number;
  price: string;
  disableAdd: boolean;
  onAdd: () => void;
  onDelete: () => void;
  onDeleteAll: () => void;
};
export const BagItem = observer(
  ({
    name,
    currentQuantity,
    price,
    disableAdd,
    onAdd,
    onDelete,
    onDeleteAll,
  }: BagItemProps) => {
    return (
      <div>
        <p css={productName}>{name}</p>
        <div css={wrapper}>
          <Quantity
            currentQuantity={currentQuantity}
            onAdd={onAdd}
            onDelete={onDelete}
            disableAdd={disableAdd}
          />
          <PriceWithColor price={price} />
          <div css={cancelWrapper}>
            <Button mode="icon" color="secondary" onClick={onDeleteAll}>
              <CancelIcon />
            </Button>
          </div>
        </div>

        <Line />
      </div>
    );
  }
);

BagItem.displayName = "BagItem";
