import * as React from 'react';
import { FlatList, Text } from 'native-base';
import Card from '../cards/Card';

const SearchList = ({ navigation, results, mediaType }) => {
    return (
        <FlatList
            data={results}
            renderItem={({ item }) => (
                <Card navigation={navigation} id={item.id} mediaType={item.media_type ? item.media_type : mediaType} item={item}/>
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default SearchList
