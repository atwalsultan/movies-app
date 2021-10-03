import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Container, Center, FlatList, Box, VStack, Divider, Heading, Text, Image, Button } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from './components/layout/Header';
import MoviesStack from './components/stacks/MoviesStack';
import SearchResultsStack from './components/stacks/SearchResultsStack';
import TVShowsStack from './components/stacks/TVShowsStack';

const Tab = createMaterialTopTabNavigator();

export default function App() {

	return (
		<NativeBaseProvider>
			<Header />

			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Movies" component={MoviesStack} />
					<Tab.Screen name="Search Results" component={SearchResultsStack} />
					<Tab.Screen name="TV Shows" component={TVShowsStack} />
				</Tab.Navigator>
			</NavigationContainer>

			<StatusBar style='light' />
		</NativeBaseProvider>
	);
}
