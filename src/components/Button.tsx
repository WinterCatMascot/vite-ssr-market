/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { GRAY, YELLOW } from "../constants";

const primary = css`
  background-color: ${YELLOW};
`;
const secondary = css`
  background-color: ${GRAY};
`;
const textMode = css`
  padding: 0 20px;
  font-weight: 600;
  font-size: 16px;
`;
const iconMode = css`
  width: 32px;
`;
const wrapper = css`
  border: none;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 7px;
`;

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "primary" | "secondary";
  mode?: "text" | "icon";
};
export const Button = ({
  onClick,
  children,
  color = "primary",
  mode = "text",
}: ButtonProps) =>
  onClick ? (
    <button
      css={css`
        ${wrapper};
        ${color === "primary" ? primary : secondary};
        ${mode === "text" ? textMode : iconMode};
      `}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <p
      css={css`
        ${wrapper};
        ${color === "primary" ? primary : secondary};
        ${mode === "text" ? textMode : iconMode};
      `}
      onClick={onClick}
    >
      {children}
    </p>
  );
