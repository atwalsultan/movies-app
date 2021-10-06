import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';
import ShowsList from '../lists/ShowsList';
import ShowsSelect from '../selects/ShowsSelect';
import Loading from '../layout/Loading';
import { fetchShows } from '../services/api'

const ShowsContainer = ({navigation}) => {
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
            <ShowsSelect showType={showType} setShowType={setShowType} />
            {shows ? <ShowsList navigation={navigation} shows={shows} mediaType='tv' /> : <Loading />}
        </Container>
    )
}

export default ShowsContainer
