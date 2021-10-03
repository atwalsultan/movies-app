import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base';
import Header from './components/layout/Header';

export default function App() {
	return (
		<NativeBaseProvider>
			<Header />
			<StatusBar style='light' />
		</NativeBaseProvider>
	);
}
