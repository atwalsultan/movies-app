import React, { useState } from 'react'
import { Button, FormControl, HStack, Icon, Input, VStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import SearchSelect from '../selects/SearchSelect'

const SearchForm = ({ handleInputChange, onSubmit, searchType, setSearchType }) => {
    return (
        <VStack width='100%' my={4}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <VStack width='100%'>
                    <Input
                        placeholder='i.e. James Bond, CSI'
                        px={3}
                        width='85%'
                        InputLeftElement={
                            <Icon size={5} ml={2} as={<Ionicons name='ios-search' />} />
                        }
                        onChangeText={value => {
                            handleInputChange(value)
                        }}
                    />

                    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                    <HStack space={4}>
                        <SearchSelect searchType={searchType} setSearchType={setSearchType}/>

                        <Button startIcon={<Icon as={Ionicons} name='ios-search' />} onPress={onSubmit}>
                            Search
                        </Button>
                    </HStack>
                    <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                        Please select a search type
                    </FormControl.HelperText>
                </VStack>
            </FormControl>
        </VStack>
    )
}

export default SearchForm
