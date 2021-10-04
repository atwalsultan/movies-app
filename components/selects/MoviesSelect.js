import * as React from 'react';
import { Box, Select, Center } from 'native-base';

const MoviesSelect = () => {
    return (
        <Box py={4}>
            <Center>
                <Select selectedValue="popular" minWidth="100%">
                    <Select.Item label="Now Playing" value="now" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="Top Rated" value="top" />
                    <Select.Item label="Upcoming" value="upcoming" />
                </Select>
            </Center>
        </Box>
    )
}

export default MoviesSelect
