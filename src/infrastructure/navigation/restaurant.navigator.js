import React from 'react';



import { createStackNavigator , TransitionPresets} from '@react-navigation/stack';
import { RestrauntsScreen } from '../../features/restraunt/screens/restraunts.screen';
import { RestaurantDetailScreen } from '../../features/restraunt/screens/restaurantdetails.screen';

const RestaurantStack = createStackNavigator();



export const RestaurantNavigator =()=>{
    return (
        <RestaurantStack.Navigator screenOptions={{headerShown:false, ...TransitionPresets.ModalPresentationIOS }}>
            <RestaurantStack.Screen name="restaurants" component={RestrauntsScreen} />
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        </RestaurantStack.Navigator>
    )
};

