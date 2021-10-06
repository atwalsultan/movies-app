import React, { useState, useEffect } from 'react';
import { Container, Box, Center } from 'native-base';
import Loading from '../layout/Loading';
import { fetchMovies } from '../services/api';
import IndexList from '../lists/IndexList';
import TypeSelect from '../selects/TypeSelect';

const MoviesContainer = ({ navigation }) => {
    const [movieType, setMovieType] = useState("popular");
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        setMovies(null);
        fetchMovies(movieType).then((fetchedMovies) => {
            setMovies(fetchedMovies)
        });
    }, [movieType])

    return (
        <Container>
            <Box py={4}>
                <Center>
                    <TypeSelect minWidth="100%" type={movieType} setType={setMovieType} optionsArray={["now_playing", "popular", "top_rated", "upcoming"]} />
                </Center>
            </Box>

            {movies ? <IndexList navigation={navigation} data={movies} mediaType='movie' /> : <Loading />}
        </Container>
    )
}

export default MoviesContainer
