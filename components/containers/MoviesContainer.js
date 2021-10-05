import React, { useState, useEffect } from 'react';
import { Container, Text } from 'native-base';
import MoviesList from '../lists/MoviesList';
import MoviesSelect from '../selects/MoviesSelect';
import Loading from '../layout/Loading';
import { fetchMovies } from '../services/api'

const MoviesContainer = ({navigation}) => {
    const [movieType, setMovieType] = useState("popular");
    const [movies, setMovies] = useState(null);

    // const fetchMovies = async () => {
    //     const uri = `https://api.themoviedb.org/3/movie/${movieType}?api_key=45bda5ff71a48f360109983797023114&language=en-US&page=1`;
    //     const response = await fetch(uri);
    //     const responseJson = await response.json()
    //     setMovies(responseJson.results);
    // }

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
