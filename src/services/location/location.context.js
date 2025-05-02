import React , { createContext, useState, useEffect } from 'react';
import { locationRequest , locationTransform } from "./location.service"



export const LocationContext = createContext();

export const LocationContextProvider = ({children})=>{

    const [location , setLocation]= useState(null);
    const [isLoading , setIsLoading]= useState(false);
    const [error , setError]= useState(null);
    const [keyword , setKeyword]= useState("san francisco");

    const onSearch = (searchKeyword)=>{ 
        setIsLoading(true);
        
        setKeyword(searchKeyword);
       
       
     }
     useEffect(()=>{
        if (!keyword.length) {
            return;
            
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setLocation(result);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
        });
     },[keyword]);

    return (
        <LocationContext.Provider value={{
            isLoading,
            error,
            keyword,
            location,
            search:onSearch,
        }} >
            {children}
        </LocationContext.Provider>
    );
};