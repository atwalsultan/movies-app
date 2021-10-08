import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../layout/Header';
import IndexScreen from '../screens/IndexScreen';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
	return (
		<>
			<Header />
			<Tab.Navigator>
				<Tab.Screen name="Movies">{(props) => <IndexScreen {...props} tab="movie" />}</Tab.Screen>
				<Tab.Screen name="Search Results">{(props) => <IndexScreen {...props} tab="search" />}</Tab.Screen>
				<Tab.Screen name="TV Shows">{(props) => <IndexScreen {...props} tab="tv" />}</Tab.Screen>
			</Tab.Navigator>
		</>
	);
}

export default HomeTabs
