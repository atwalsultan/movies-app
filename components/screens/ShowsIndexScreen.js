import * as React from 'react';
import { Center } from 'native-base';
import ShowsContainer from '../containers/ShowsContainer';

const ShowsIndexScreen = ({ navigation }) => {
    return (
        <Center>
            <ShowsContainer navigation={navigation} />
        </Center>
	)
}

export default ShowsIndexScreen
