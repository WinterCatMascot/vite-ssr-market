/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";

const line = css`
  background-color: #a3a3a3;
  height: 1px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Line = () => <div css={line} />;
