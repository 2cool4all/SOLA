import * as React from 'react';
import {Assets, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ElectricCharge, ElectricForce, Exercise1Screen, HomeScreen, ModuleListScreen, SplashScreen, Exercise2Screen, USLEMW1} from '../container';
import { color } from '../utility';
import USLEMListScreen from '../container/USLEMListScreen';

const Stack = createStackNavigator();

function NavContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash"
            screenOptions={{
                headerShown:true,
                headerStyle:{backgroundColor: color.DARK_LIME_GREEN},
                headerTintColor:color.WHITE,
                headerTitleAlign: 'center',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize: 20,
                },
            }}
            >
                <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="ModuleListScreen"
                component={ModuleListScreen}
                options={{headerLeft: null}}
                />
                <Stack.Screen
                name="USLEMs"
                component={USLEMListScreen}
                options={{headerLeft: null}}
                />
                <Stack.Screen
                name="USLEM Week 1"
                component={USLEMW1}
                />
                <Stack.Screen
                name="ElectricCharge"
                component={ElectricCharge}
                options={{headerLeft: null}}
                />
                <Stack.Screen
                name="ElectricForce"
                component={ElectricForce}
                options={{headerLeft: null}}
                />
                <Stack.Screen
                name="Exercise1"
                component={Exercise1Screen}
                options={{headerLeft: null}}
                />
                <Stack.Screen
                name="Exercise2"
                component={Exercise2Screen}
                options={{headerLeft: null}}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default NavContainer;