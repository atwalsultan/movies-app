import * as React from 'react';
import { Box, Select, Center } from 'native-base';

const ShowsSelect = ({ showType, setShowType }) => {
    return (
        <Box py={4}>
            <Center>
                <Select selectedValue={showType} minWidth="100%" onValueChange={(value) => setShowType(value)}>
                    <Select.Item label="Airing Today" value="airing_today" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="On the Air" value="on_the_air" />
                    <Select.Item label="Top Rated" value="top_rated" />
                </Select>
            </Center>
        </Box>
    )
}

export default ShowsSelect
