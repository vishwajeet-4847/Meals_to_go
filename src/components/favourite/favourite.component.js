import React , {useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import { FavouritesContext } from '../../services/favourites/favourite.context';

import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';


const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 11%;
    right:11%;
    z-index:99;

`;
export const  Favourite = ({restaurant})=>{
    const { favourites=[] , addToFavourites , removeFromFavourites } = useContext(FavouritesContext);

    //  to check restaurant is present in favourite restaurant
  
    const isFavourite = favourites.find(
        (f) => f.placeId === restaurant.placeId
    );
   
    


    
   return <FavouriteButton 
    onPress={isFavourite? ()=> removeFromFavourites(restaurant) : ()=> addToFavourites(restaurant)}
   >
    <Ionicons name={isFavourite? "heart" : "heart-outline"} size={25} color={"red"} />
    </FavouriteButton>
     

};