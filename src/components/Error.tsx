/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";

const wrapper = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 64px 48px;
  box-sizing: border-box;
`;
const title = css`
  font-weight: 600;
  font-size: 48px;
`;
const desc = css`
  font-weight: 400;
  font-size: 32px;
`;

export const Error = () => (
  <div css={wrapper}>
    <p css={title}>Ошибка сервера</p>
    <p css={desc}>Попробуйте позднее</p>
  </div>
);
