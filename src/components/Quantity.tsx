/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { GRAY } from "../constants";

const background = css`
  background-color: ${GRAY};
`;
const button = css`
  border: none;
  width: 28px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const wrapper = css`
  display: flex;
`;
const buttonDel = css`
  ${background};
  ${button};
  border-radius: 7px 0 0 7px;
`;
const buttonAdd = css`
  ${background};
  ${button};
  border-radius: 0 7px 7px 0;
`;
const counter = css`
  ${background};
  height: 32px;
  width: 64px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type QuantityProps = {
  currentQuantity: number;
  disableAdd: boolean;
  onAdd: () => void;
  onDelete: () => void;
};
export const Quantity = ({
  disableAdd,
  onDelete,
  onAdd,
  currentQuantity,
}: QuantityProps) => (
  <div css={wrapper}>
    <button css={buttonDel} onClick={onDelete}>
      <DeleteIcon />
    </button>
    <div css={counter}>{currentQuantity}</div>
    <button css={buttonAdd} disabled={disableAdd} onClick={onAdd}>
      <AddIcon opacity={disableAdd ? "30%" : "100%"} />
    </button>
  </div>
);
