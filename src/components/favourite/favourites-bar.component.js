import React from "react";

import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfoCard } from "../restaurant/compact-restaurant-info-card.component";
import { Text } from "../typography/typography.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
  height:200px;
    
 
  
 
`;
export const FavouritesBar = ({ favourites ,navigation}) => {
  
  
    if (favourites.length<1) {
    return null;
  }
  return (
    <FavouritesWrapper>
        <Spacer variant="left.large" />
            <Text variant="caption">Favourites</Text>


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((item, index) => {
          const key = `${item.name}-${index}`;
         
          

          return (

            <Spacer size="medium" position="left" key={key}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
              style={{ flex: 1 }} // Ensure it takes up available space
            >
              <CompactRestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          </Spacer>
           
              
            
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
