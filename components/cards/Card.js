import * as React from 'react';
import { Box, VStack, Heading, Text, Image, Button, HStack } from 'native-base';

const MovieCard = ({ navigation, item, mediaType }) => {


    return (
        <Box mb={4}>
            <HStack space={2}>
                <Box>
                    <Image alt={`${item.label}`} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} size={'xl'} />
                </Box>

                <Box width='55%' >
                    <VStack>
                        <Heading size='sm'>{item.original_name ? item.original_name : item.original_title}</Heading>
                        <Text>Popularity: {item.popularity}</Text>
                        <Text>Release Date: {item.release_date}</Text>
                        <Button onPress={() => navigation.navigate('Show', { id: item.id, mediaType: mediaType })}>More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default MovieCard
