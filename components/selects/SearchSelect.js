import * as React from 'react';
import { Box, Select, Center } from 'native-base';

const SearchSelect = () => {
    return (
        <Select selectedValue="multi" minWidth="50%">
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="Multi" value="multi" />
            <Select.Item label="Shows" value="shows" />
        </Select>
    )
}

export default SearchSelect
