import * as React from 'react';
import { Container } from 'native-base';
import MoviesList from '../lists/MoviesList';
import MoviesSelect from '../selects/MoviesSelect';

const MoviesContainer = ({navigation}) => {
    return (
        <Container>
            <MoviesSelect />
            <MoviesList navigation={navigation} />
        </Container>
    )
}

export default MoviesContainer
