import { Center, Heading, Box, Container } from 'native-base';
import React from 'react';

const SearchResultsLoading = () => {
    return (
        <Center>
            <Container py={10}>
                <Box minWidth='100%'>
                    <Heading>Please initiate a search</Heading>
                </Box>
            </Container>
        </Center>
    )
}

export default SearchResultsLoading
