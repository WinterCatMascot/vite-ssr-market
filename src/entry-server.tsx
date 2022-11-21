import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export function SSRRender(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(<App />);
}
