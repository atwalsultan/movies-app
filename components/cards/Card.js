import * as React from 'react';
import { Box, VStack, Heading, Text, Image, Button, HStack } from 'native-base';

const MovieCard = ({navigation, item}) => {
    return (
        <Box mb={4}>
            <HStack space={2}>
                <Box>
                    <Image alt={`${item.label}`} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} size={'xl'} />
                </Box>

                <Box width='55%' >
                    <VStack>
                        <Heading size='sm'>{item.title}</Heading>
                        <Text>Popularity: {item.popularity}</Text>
                        <Text>Release Date: {item.release_date}</Text>
                        <Button onPress={() => navigation.navigate('MoviesShow', { poster_path: item.poster_path, title: item.title, overview: item.overview, popularity: item.popularity, releaseDate: item.release_date })}>More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default MovieCard
