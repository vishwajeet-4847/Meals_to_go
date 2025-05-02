import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";


import { CheckoutScreen } from "../../features/checkout/screen/checkout.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantNavigator } from "./restaurant.navigator";
import { SettingsNavigator } from './settings.navigator';

import { RestaurantsContextProvider } from "../../services/restaurant/restaurants.context";
import { FavouritesContextProvider } from "../../services/favourites/favourite.context";
import { LocationContextProvider } from "../../services/location/location.context";


const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restraunts: ["restaurant", "restaurant-outline"],
  Map: ["map", "map-outline"],
  Settings: ["settings", "settings-outline"],
  Checkout:["cart","cart-outline"]
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = focused
        ? TAB_ICONS[route.name][0]
        : TAB_ICONS[route.name][1];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
  };
};

function BottomTabs() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <FavouritesContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restraunts" component={RestaurantNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
            
          </Tab.Navigator>
        </FavouritesContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}



export const AppNavigator = () => {
  return <BottomTabs />;
};
