import * as React from 'react';
import { Text, Center, Heading, Box, VStack, Image, Container, StatusBar } from 'native-base';

const MoviesShowScreen = ({ navigation, route }) => {
    const { poster_path, title, overview, popularity, releaseDate } = route.params;

    return (
        <>
        <StatusBar backgroundColor='white' barStyle='light-content' />
        <Center>
            <Container pt={6}>
                <VStack space={4} style={{alignItems: 'center'}}>
                    <Heading py={10} style={{textAlign: 'center'}}>{title}</Heading>
                    <Image alt={`${title}`} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} size={'2xl'} />
                    <Text>{overview}</Text>
                    <Text>Popularity: {popularity} | Release Date: {releaseDate}</Text>	
                </VStack>
            </Container>
        </Center>
        </>
	)
}

export default MoviesShowScreen
