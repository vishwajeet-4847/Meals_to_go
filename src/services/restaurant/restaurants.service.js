import { mocks , mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("data not found");
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
    const newResults = results.map((restaurant)=>{
        updatedPhotos = restaurant.photos.map((p)=>{
          
            
            return mockImages[Math.floor(Math.random() * mockImages.length)];
        }); 

      return  {
            ...restaurant, 
            address:restaurant.vicinity,
            photos:updatedPhotos,
            isClosedTemporarily : restaurant.business_status === "CLOSED_TEMPORARILY",
            isOpenNow:restaurant.opening_hours && restaurant.opening_hours.open_now,

            
        }
    });
    return camelize(newResults);
}


