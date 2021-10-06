import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppStack from './components/stacks/AppStack';

export default function App() {
	return (
		<NativeBaseProvider>
			<AppStack />
		</NativeBaseProvider>
	);
}