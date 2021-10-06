import * as React from 'react';
import { FlatList } from 'native-base';
import Card from '../cards/Card';

const MoviesList = ({ navigation, movies, mediaType }) => {
    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <Card navigation={navigation} id={item.id} mediaType={mediaType} item={item} />
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default MoviesList
