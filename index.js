import React from 'react';
import HomeScreen from './screens/homescreen'
import Vitals from './screens/tabs/vitals'
import Doctor from './screens/tabs/doctor'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MeasureNow from './screens/measure_now';

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function Index() {

    const createBottomTabs = () => {
        return (
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen name="Home" component={HomeScreen} />
                <MaterialBottomTabs.Screen name="Vitals" component={Vitals} />
                <MaterialBottomTabs.Screen name="Doctor" component={Doctor} />
            </MaterialBottomTabs.Navigator>
        )
    }

    const createHomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name={"Vitals"} children={createBottomTabs} />
                <Stack.Screen name={"MeasureNow"} component={MeasureNow} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {createHomeStack()}
        </NavigationContainer>
    );
}

export default Index