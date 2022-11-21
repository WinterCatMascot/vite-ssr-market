import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { CHANGE_USD_RATE_TIMER, FETCH_TIMER } from "./constants";
import { Products } from "./containers/Products";
import { ShoppingBag } from "./containers/ShoppingBag";
import shop from "./store/shop";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import "./styles.css";

export const App = observer(() => {
  useEffect(() => {
    shop.fetchData();
    const interval = setInterval(() => shop.fetchData(), FETCH_TIMER);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => shop.changeUsdRate(),
      CHANGE_USD_RATE_TIMER
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    shop.setPreviousBag();
  }, []);

  return (
    <>
      {shop.loading && <Loading />}
      {shop.error && <Error />}

      <Products />
      <ShoppingBag />
    </>
  );
});

App.displayName = "App";
