import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowScreen from '../screens/ShowScreen';
import HomeTabs from '../tabs/HomeTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Show" component={ShowScreen} options={{ headerBackTitle: 'Back to List' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack
