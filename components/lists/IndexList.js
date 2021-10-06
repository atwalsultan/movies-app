import * as React from 'react';
import { FlatList } from 'native-base';
import Card from '../cards/Card';

const IndexList = ({ navigation, data, mediaType }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Card navigation={navigation} id={item.id} mediaType={item.media_type ? item.media_type : mediaType} item={item} />
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default IndexList
