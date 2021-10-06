import * as React from 'react';
import { Center } from 'native-base';
import MoviesContainer from '../containers/MoviesContainer';
import SearchContainer from '../containers/SearchContainer';
import ShowsContainer from '../containers/ShowsContainer';

const IndexScreen = ({ navigation, tab }) => {
    return (
        <Center>
            {tab == "movies" && <MoviesContainer navigation={navigation} />}
            {tab == "search" && <SearchContainer navigation={navigation} />}
            {tab == "tv" && <ShowsContainer navigation={navigation} />}
        </Center>
    )
}

export default IndexScreen
