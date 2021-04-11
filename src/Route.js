import React from "react";
import { Menu } from "antd";
import { Route, useHistory } from "react-router-dom";
import BeerPage from "./pages/Beer";

const Test = () => <p>Test</p>;

const Router = () => {
  const history = useHistory();

  const handleClick = (event) => {
    history.push(`/${event.key === "beer" ? "" : event.key}`);
  };
  return (
    <div>
      <Menu mode="horizontal" onClick={handleClick}>
        <Menu.Item key="beer">Beer</Menu.Item>
        <Menu.Item key="map">Map</Menu.Item>
      </Menu>

      <Route path="/" exact component={BeerPage} />
      <Route path="/map" exact component={Test} />
    </div>
  );
};

export default Router;
