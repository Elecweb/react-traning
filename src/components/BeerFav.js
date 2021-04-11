import React, { createContext, useState } from "react";

export const BeerFavoriteContext = createContext({});

const BeerFavoriteProvider = ({ children }) => {
  const [favoritedBeers, setFavoritedBeers] = useState([]);

  const toggleFavoriteBeer = (beer) => {
    const hasBeer = favoritedBeers.find((item) => beer.id === item.id);
    if (hasBeer) {
      const favoritedBeersExcludeCurrentBeer = favoritedBeers.filter(
        (item) => beer.id !== item.id
      );
      setFavoritedBeers([...favoritedBeersExcludeCurrentBeer]);
    } else {
      setFavoritedBeers([...favoritedBeers, beer]);
    }
  };

  return (
    <BeerFavoriteContext.Provider
      value={{
        favoritedBeers,
        toggleFavoriteBeer,
      }}
    >
      {children}
    </BeerFavoriteContext.Provider>
  );
};

export default BeerFavoriteProvider;
