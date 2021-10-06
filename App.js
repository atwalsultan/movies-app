import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import Header from './components/layout/Header';
import MoviesIndexScreen from './components/screens/MoviesIndexScreen';
import ShowsIndexScreen from './components/screens/ShowsIndexScreen';
import SearchIndexScreen from './components/screens/SearchIndexScreen';
import ShowScreen from './components/screens/ShowScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
	return (
		<>
			<Header />
			<Tab.Navigator>
				<Tab.Screen name="Movies" component={MoviesIndexScreen} />
				<Tab.Screen name="Search Results" component={SearchIndexScreen} />
				<Tab.Screen name="TV Shows" component={ShowsIndexScreen} />
			</Tab.Navigator>
		</>
	);
}

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false}} />
					<Stack.Screen name="Show" component={ShowScreen} options={({ route }) => ({
						title: route.params.title,
					})} />
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}