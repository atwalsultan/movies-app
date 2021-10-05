import * as React from 'react';
import { Center } from 'native-base';
import SearchContainer from '../containers/SearchContainer';

const SearchIndexScreen = ({navigation}) => {
    return (
        <Center>
            <SearchContainer navigation={navigation} />
        </Center>
	)
}

export default SearchIndexScreen
