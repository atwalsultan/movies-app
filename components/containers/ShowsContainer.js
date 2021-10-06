import React, { useState, useEffect } from 'react';
import { Container, Box, Center } from 'native-base';
import Loading from '../layout/Loading';
import { fetchShows } from '../services/api';
import IndexList from '../lists/IndexList';
import TypeSelect from '../selects/TypeSelect';

const ShowsContainer = ({ navigation }) => {
    const [showType, setShowType] = useState("popular");
    const [shows, setShows] = useState(null);

    useEffect(() => {
        setShows(null);
        fetchShows(showType).then((fetchedShows) => {
            setShows(fetchedShows)
        });
    }, [showType])

    return (
        <Container>
            <Box py={4}>
                <Center>
                    <TypeSelect minWidth="100%" type={showType} setType={setShowType} optionsArray={["airing_today", "popular", "on_the_air", "top_rated"]} />
                </Center>
            </Box>

            {shows ? <IndexList navigation={navigation} data={shows} mediaType='tv' /> : <Loading />}
        </Container>
    )
}

export default ShowsContainer
