import * as React from 'react';
import { Box, Select, Center } from 'native-base';

const MoviesSelect = ({ movieType, setMovieType }) => {
    return (
        <Box py={4}>
            <Center>
                <Select selectedValue={movieType} minWidth="100%" onValueChange={(value) => setMovieType(value)}>
                    <Select.Item label="Now Playing" value="now_playing" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="Top Rated" value="top_rated" />
                    <Select.Item label="Upcoming" value="upcoming" />
                </Select>
            </Center>
        </Box>
    )
}

export default MoviesSelect
