import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';
import MoviesList from '../lists/MoviesList';
import MoviesSelect from '../selects/MoviesSelect';
import Loading from '../layout/Loading';
import { fetchMovies } from '../services/api'

const MoviesContainer = ({navigation}) => {
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
            <MoviesSelect movieType={movieType} setMovieType={setMovieType}/>
            {movies ? <MoviesList navigation={navigation} movies={movies}/> : <Loading />}
        </Container>
    )
}

export default MoviesContainer
