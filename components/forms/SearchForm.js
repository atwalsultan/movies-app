import React, { useState } from 'react';
import { Box, Button, FormControl, HStack, Icon, Input, VStack, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import TypeSelect from '../selects/TypeSelect';
import { fetchSearchResults } from '../services/api';

const SearchForm = ({ type, setType, setList }) => {
    const [error, setError] = useState(false);
    const [searchInput, setsearchInput] = useState("");

    const onFormSubmit = () => {
        fetchSearchResults(searchInput, type).then((fetchedResults) => {
            setList(fetchedResults);
        });
    }

    return (
        <VStack width='100%' my={4}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <VStack width='100%'>
                    <Container style={[{borderWidth: 1}, error && {borderColor: 'red'}]} >
                        <Input
                            placeholder='i.e. James Bond, CSI'
                            px={3}
                            InputLeftElement={
                                <Icon size={5} ml={2} as={<Ionicons name='ios-search' />} />
                            }
                            onChangeText={value => {
                                setsearchInput(value);
                            }}
                        />
                    </Container>

                    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                    <HStack space={4}>
                        <Box minWidth="50%" style={[{borderWidth: 1}, error && {borderColor: 'red'}]}>
                            <TypeSelect type={type} setType={setType} optionsArray={["movie", "multi", "tv"]} minWidth="50%" />
                        </Box>

                        <Button startIcon={<Icon as={Ionicons} name='ios-search' />} onPress={() => {
                            if(searchInput === undefined || searchInput === "") {
                                setError(true);
                                setList(null)
                                return;
                            }
                            setError(false);
                            onFormSubmit();
                        }}>
                            Search
                        </Button>
                    </HStack>
                    {
                        error ? <FormControl.HelperText _text={{ fontSize: 'xs', color: 'rgb(255, 0, 0)' }}>Movie/TV show name is required</FormControl.HelperText> : <FormControl.HelperText _text={{ fontSize: 'xs' }}>Please select a search type</FormControl.HelperText>
                    }
                </VStack>
            </FormControl>
        </VStack>
    )
}

export default SearchForm
