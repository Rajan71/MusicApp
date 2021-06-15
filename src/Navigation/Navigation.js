import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen'
import BigStage from '../screens/BigStage'
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator();


function HomeNav(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BigStage" component={BigStage} options={{ headerShown: false }} />

                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />


            </Stack.Navigator>


        </NavigationContainer>
    );
}
export default HomeNav;