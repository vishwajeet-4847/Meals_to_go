import React , {useState , createContext ,useEffect , useContext }  from 'react';
import { AuthContext } from '../authentication/authentication.context';

import AsyncStorage from '@react-native-async-storage/async-storage';




export const  FavouritesContext = createContext();

export const FavouritesContextProvider = ({children})=>{

    const { user }= useContext(AuthContext);
    const [favourites , setFavourites] = useState([]);
   const remove = (restaurant)=>{
        setFavourites(favourites.filter(r=>r.placeId!==restaurant.placeId));
    };
    const add = (restaurant)=>{
        setFavourites([...favourites, restaurant]);
    };

    const storeFavourites = async (favourites, uid) => {
        try {
            const jsonValue = JSON.stringify(favourites);
            await AsyncStorage.setItem(`'@favourites'-${uid}`, jsonValue);
        } catch (e) {
          console.log("error saving favourites",e);
          
        }
      };

      const loadFavourites = async (uid) => {
        try {
          const jsonValue = await AsyncStorage.getItem(`'@favourites'-${uid}`);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("error loading favourites",e);
        }
      };

      useEffect(()=>{
        if (user) {
          loadFavourites(user.uid).then(data=>setFavourites(data));
        }
        
      },[user]);
      
      useEffect(()=>{
        if (user) {
          storeFavourites(favourites , user.uid);
        }
        
      },[favourites , user]); 
    




    return (
        <FavouritesContext.Provider value={{favourites, removeFromFavourites:remove , addToFavourites:add}}>
            {children}
        </FavouritesContext.Provider>
    );
};