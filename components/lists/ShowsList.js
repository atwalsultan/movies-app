import * as React from 'react';
import { FlatList } from 'native-base';
import Card from '../cards/Card';

const ShowsList = ({ navigation, shows, mediaType }) => {
    return (
        <FlatList
            data={shows}
            renderItem={({ item }) => (
                <Card navigation={navigation} id={item.id} mediaType={mediaType} item={item}/>
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default ShowsList
