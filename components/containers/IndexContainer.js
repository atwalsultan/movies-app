import React, { useState, useEffect } from 'react';
import { Container, Box, Center } from 'native-base';
import Loading from '../layout/Loading';
import SearchResultsLoading from '../layout/SearchResultsLoading';
import { fetchMovies, fetchShows } from '../services/api';
import IndexList from '../lists/IndexList';
import TypeSelect from '../selects/TypeSelect';
import SearchForm from '../forms/SearchForm';

const IndexContainer = ({ navigation, tab }) => {
    const [type, setType] = useState(tab === "search" ? "multi" : "popular");
    const [list, setList] = useState(null);

    useEffect(() => {
        setList(null);
    
        if(tab === "movie") {
            fetchMovies(type).then((fetchedMovies) => {
                setList(fetchedMovies);
            });
        }
        else if(tab === "tv") {
            fetchShows(type).then((fetchedShows) => {
                setList(fetchedShows)
            });
        }
    }, [type])

    return (
            <Container>
                {
                    (tab === "search") 
                    ?
                    <SearchForm type={type} setType={setType} setList={setList}/> 
                    :
                    <Box py={4}>
                        <Center>
                            <TypeSelect minWidth="100%" type={type} setType={setType} optionsArray={tab === "movie" ? ["now_playing", "popular", "top_rated", "upcoming"] : ["airing_today", "popular", "on_the_air", "top_rated"]} />
                        </Center>
                    </Box>
                }

                {list ? <IndexList navigation={navigation} data={list} mediaType={tab==="search" ? type : tab} /> : (tab === "search" ? <SearchResultsLoading /> : <Loading />)}
            </Container>
        
    )
}

export default IndexContainer
