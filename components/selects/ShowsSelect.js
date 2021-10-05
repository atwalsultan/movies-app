import * as React from 'react';
import { Box, Select, Center } from 'native-base';

const ShowsSelect = () => {
    return (
        <Box py={4}>
            <Center>
                <Select selectedValue="popular" minWidth="100%">
                    <Select.Item label="Airing Today" value="today" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="On the Air" value="air" />
                    <Select.Item label="Top Rated" value="top" />
                </Select>
            </Center>
        </Box>
    )
}

export default ShowsSelect
