import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import Header from './components/layout/Header';
import MoviesIndexScreen from './components/screens/movies/MoviesIndexScreen';
import MoviesShowScreen from './components/screens/movies/MoviesShowScreen';

function FeedScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Search Results!</Text>
		</View>
	);
}

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
	return (
		<>
			<Header />
			<Tab.Navigator>
				<Tab.Screen name="Movies" component={MoviesIndexScreen} />
				<Tab.Screen name="Search Results" component={FeedScreen} />
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
					<Stack.Screen name="MoviesShow" component={MoviesShowScreen} options={({ route }) => ({
						title: route.params.title,
					})} />
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}