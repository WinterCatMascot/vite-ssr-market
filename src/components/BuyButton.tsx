/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { YELLOW } from "../constants";

const wrapper = css`
  background-color: ${YELLOW};
  height: 56px;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
`;

type BuyButtonProps = {
  onClick: () => void;
};
export const BuyButton = ({ onClick }: BuyButtonProps) => (
  <button css={wrapper} onClick={onClick}>
    Купить
  </button>
);
