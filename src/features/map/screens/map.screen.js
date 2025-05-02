import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";

import { Platform } from "react-native";

import { Search } from "../components/search.component";
import { RestrauntsContext } from "../../../services/restaurant/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";

import { MapCallout } from "../components/callout.component";


// Styled component for Map
const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { restaurants = [] } = useContext(RestrauntsContext);
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);

  // Destructuring lat, lng, and viewport from location
  const { lat, lng, viewport } = location || {}; // Add fallback for safety if location is undefined

  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
    }
  }, [location, viewport]); // Update whenever location or viewport changes

  return (
    <>
      <Search />
      <Map
        region={{
          latitudeDelta: latDelta,
          longitudeDelta: latDelta * 0.7,
          latitude: lat,
          longitude: lng,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          > 
          {
            Platform.OS==="android"?<MapCallout restaurant={restaurant} />: <Callout
            onPress={() =>
              navigation.navigate("Restraunts", {
                screen: "RestaurantDetail",
                params: { restaurant },
              })
            }
          >
           
            <MapCallout restaurant={restaurant} />
          </Callout>
          }
             
           
          </Marker>
        ))}
      </Map>
    </>
  );
};
