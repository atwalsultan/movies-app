import React, { useState, useEffect } from 'react';
import { Text, Center, Heading, VStack, Image, Container, StatusBar } from 'native-base';
import { fetchDetails } from '../services/api'

const MoviesShowScreen = ({ navigation, route }) => {
    const [details, setDetails] = useState(null)
    const { id, mediaType } = route.params;

    useEffect(() => {
        fetchDetails(mediaType, id).then((details) => {
            setDetails(details);
        })
    }, [])

    return (
        <>
            <StatusBar backgroundColor='white' barStyle='light-content' />
            { details &&
                <Center>
                    <Container pt={6}>
                        <VStack space={4} style={{alignItems: 'center'}}>
                            <Heading py={10} style={{textAlign: 'center'}}>{details.title}</Heading>
                            <Image alt={`${details.title}`} source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }} size={'2xl'} />
                            <Text>{details.overview}</Text>
                            <Text>Popularity: {details.popularity} | Release Date: {details.releaseDate}</Text>	
                        </VStack>
                    </Container>
                </Center>
            }
        </>
    )
}

export default MoviesShowScreen
