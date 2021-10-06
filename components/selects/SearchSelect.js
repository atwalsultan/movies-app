import * as React from 'react';
import { Select } from 'native-base';

const SearchSelect = ({ searchType, setSearchType }) => {
    return (
        <Select selectedValue={searchType} minWidth="50%" onValueChange={(value) => setSearchType(value)}>
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="Multi" value="multi" />
            <Select.Item label="TV" value="tv" />
        </Select>
    )
}

export default SearchSelect
