import * as React from 'react';
import { Center } from 'native-base';
import IndexContainer from '../containers/IndexContainer';

const IndexScreen = ({ navigation, tab }) => {
    return (
        <Center>
            <IndexContainer navigation={navigation} tab={tab} />
        </Center>
    )
}

export default IndexScreen
