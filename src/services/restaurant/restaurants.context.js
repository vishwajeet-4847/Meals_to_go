import React, { createContext, useState, useEffect, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestrauntsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true); // Start loading
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((result) => {
        setRestaurants(result);
        setIsLoading(false); // Finish loading
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false); // Ensure loading stops
      });
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
    }
    
  }, [location]);

  return (
    <RestrauntsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestrauntsContext.Provider>
  );
};
