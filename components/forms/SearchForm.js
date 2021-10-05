import React, { useState } from 'react'
import { Button, FormControl, HStack, Icon, Input, VStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import SearchSelect from '../selects/SearchSelect'

const SearchForm = () => {
    return (
        <VStack width='100%' my={4}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <VStack width='100%'>
                    <Input
                        placeholder='i.e. James Bond, CSI'
                        variant='filled'
                        bg='gray.200'
                        px={3}
                        width='85%'
                        InputLeftElement={
                            <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                        }
                    // onChangeText={value => {
                    //     onInputChange(value)
                    //     setData({ ...formData, name: value })
                    // }}
                    />

                    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                    <HStack space={4}>
                        <SearchSelect />

                        <Button startIcon={<Icon as={Ionicons} name='ios-search' />}>
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
