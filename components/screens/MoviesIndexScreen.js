import * as React from 'react';
import { Center } from 'native-base';
import MoviesContainer from '../containers/MoviesContainer';

const MoviesIndexScreen = ({ navigation }) => {
    return (
        <Center>
            <MoviesContainer navigation={navigation} />
        </Center>
	)
}

export default MoviesIndexScreen
