import React, { useEffect } from "react";
import Route from "./Route";
import { BrowserRouter } from "react-router-dom";
import DialogBeerDetial from "./pages/DialogBeerDetial";
import "antd/dist/antd.css";
import "@ant-design/icons";
import { Provider } from "react-redux";
import store from "./store";
import BeerFavoriteProvider from "./components/BeerFav";

function App() {
  useEffect(() => {
    // console.log("process.env.REACT_APP_GG_KEY", process.env.REACT_APP_GG_KEY);
    return () => {};
  }, []);

  return (
    <BeerFavoriteProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Route />
          <DialogBeerDetial />
        </BrowserRouter>
      </Provider>
    </BeerFavoriteProvider>
  );
}

export default App;
