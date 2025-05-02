import React from "react";
import camelize from "camelize";
import { locations } from "./location.mock";


export const  locationRequest = (searchedTerms)=>{
    return new Promise((resolve , reject)=>{
        const location = locations[searchedTerms];
        if(!location) reject("No location found");
        resolve(location);
    }
        
    );

};

export const locationTransform = (result)=>{
    const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  

  return { lat, lng , viewport : geometry.viewport};
};