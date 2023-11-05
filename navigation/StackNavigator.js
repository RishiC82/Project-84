import React from 'react';
import { createSwitchNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator'
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator =  () => {
    return(
        <StackNavigator>
            initalRouteName="Home"
            screenOptions={{
                headerShown:false
            }}

            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
        </StackNavigator>
    );
};

export default StackNavigator;