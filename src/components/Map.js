import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{ width: '100px' }}>
    <p style={{ color: 'white' }}>{text}</p>
    <img alt="red-car" width="60px" src="https://img.home.co.th/content/11/00010879/00010879_20200801T141512217.jpg" />
  </div>
);

const GoogleMap = (props) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_GOOGLE_MAP_KEY }}
        defaultCenter={props.defaultCenter}
        defaultZoom={props.defaultZoom}
      >
        <AnyReactComponent lat={props.defaultCenter[0]} lng={props.defaultCenter[1]} text="I'm Here !" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
