import React ,{useContext , useState} from 'react';

import { AppNavigator} from './app.navigator';
import { AuthContext } from '../../services/authentication/authentication.context';
import { AccountNavigator } from './account.navigator';
import { NavigationContainer } from "@react-navigation/native";


export const Navigation = ()=>{
    const { isAuthenticated } = useContext(AuthContext);
   
    
    return (
        <NavigationContainer>
              {
                isAuthenticated ? <AppNavigator /> : <AccountNavigator />
                
               
              }
            
        </NavigationContainer>
      
    )
};