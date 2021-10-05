import * as React from 'react';
import { Container } from 'native-base';
import ShowsList from '../lists/ShowsList';
import ShowsSelect from '../selects/ShowsSelect';

const ShowsContainer = ({navigation}) => {
    return (
        <Container>
            <ShowsSelect />
            <ShowsList navigation={navigation} />
        </Container>
    )
}

export default ShowsContainer
