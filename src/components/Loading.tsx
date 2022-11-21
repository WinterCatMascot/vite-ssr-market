/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css, keyframes } from "@emotion/react";
import { GRAY, YELLOW } from "../constants";

const animation = keyframes`
  0% {
      left: -40%;
  }
  50% {
      left: 20%;
      width: 80%;
  }
  100% {
      left: 100%;
      width: 100%;
  }
`;

const height = css`
  height: 4px;
`;
const loader = css`
  ${height};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background-color: ${GRAY};

  &:before {
    content: "";
    position: absolute;
    left: -50%;
    ${height};
    width: 40%;
    background-color: ${YELLOW};
    -webkit-animation: ${animation} 1s linear infinite;
    -moz-animation: ${animation} 1s linear infinite;
    animation: ${animation} 1s linear infinite;
  }
`;

export const Loading = () => <div css={loader} />;
