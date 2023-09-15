import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from "react-native";
import HomeRoutes from '../Routes/index';
import Welcome from '../pages/Welcome';

const {Navigator, Screen} = createStackNavigator();

const WelcomeRoutes: React.FC = () => {
    const noHeader = { headerShown: false }
    return(
        <NavigationContainer independent={ true }>
            <Navigator>
                <Screen 
                    name="Welcome" 
                    component={ Welcome } 
                    options={{ headerShown: false }}
                />
                <Screen 
                    name="HomeRoutes" 
                    component={HomeRoutes}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default WelcomeRoutes;