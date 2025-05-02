import React from 'react';
import { createNativeStackNavigator , CardStyleInterpolators} from '@react-navigation/native-stack';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';

const SettingsStack = createNativeStackNavigator();



export const SettingsNavigator = () => {
    return (
      <SettingsStack.Navigator  >
        <SettingsStack.Screen
          name="SettingScreen"
          component={SettingsScreen}
          options={{
            headerTitle: "Settings", 
            
          }}
        />
        <SettingsStack.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            headerTitle: "My Favourites",
           
          }}
        />
      
        <SettingsStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerTitle: "Profile Pic",
           
          }}
        />
      </SettingsStack.Navigator>
    );
  };