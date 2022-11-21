/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { GREEN, RED } from "../constants";

const green = css`
  background-color: ${GREEN};
`;
const red = css`
  background-color: ${RED};
`;
const wrapper = css`
  transition: background-color 0.5s ease;
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-left: 24px;
`;

type PriceProps = {
  price: string;
  rateFall: boolean;
};
export const Price = ({ price, rateFall }: PriceProps) => (
  <div
    css={css`
      ${wrapper};
      ${rateFall ? green : red};
    `}
  >
    {price}
  </div>
);
