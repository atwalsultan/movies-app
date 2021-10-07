import React, { useState } from 'react';
import { Container } from 'native-base';
import SearchForm from '../forms/SearchForm';
import SearchResultsLoading from '../layout/SearchResultsLoading';
import { fetchSearchResults } from '../services/api';
import IndexList from '../lists/IndexList';

const SearchContainer = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [searchType, setSearchType] = useState("multi")


    const handleInputChange = (input) => {
        setSearchInput(input);
    }

    const onFormSubmit = () => {
        fetchSearchResults(searchInput, searchType).then((fetchedResults) => {
            setSearchResults(fetchedResults);
        });
    }

    return (
        <Container>
            <SearchForm handleInputChange={handleInputChange} onSubmit={onFormSubmit} searchType={searchType} setSearchType={setSearchType} setSearchResults={setSearchResults}/>
            {searchResults ? <IndexList navigation={navigation} data={searchResults} mediaType={searchType} /> : <SearchResultsLoading />}
        </Container>
    )
}

export default SearchContainer
