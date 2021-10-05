import * as React from 'react';
import { Container } from 'native-base';
import SearchForm from '../forms/SearchForm';
import SearchList from '../lists/SearchList';

const SearchContainer = ({navigation}) => {
    return (
        <Container>
            <SearchForm />
            <SearchList navigation={navigation} />
        </Container>
    )
}

export default SearchContainer
