import React from 'react';
import { Menu } from 'antd';
import { Route, useHistory } from 'react-router-dom';
import BeerPage from './pages/Beer';
import GoogleMap from './components/Map';

const CNX_CENTER = [18.767749, 98.9640088];

const Router = () => {
  const history = useHistory();

  const handleClick = (event) => {
    history.push(`/${event.key === 'beer' ? '' : event.key}`);
  };
  return (
    <div>
      <Menu mode="horizontal" onClick={handleClick}>
        <Menu.Item key="beer">Beer</Menu.Item>
        <Menu.Item key="map">Map</Menu.Item>
      </Menu>

      <Route path="/" exact component={BeerPage} />
      <Route
        path="/map"
        exact
        render={() => {
          return <GoogleMap defaultZoom={15} defaultCenter={CNX_CENTER} />;
        }}
      />
    </div>
  );
};

export default Router;
