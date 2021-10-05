import * as React from 'react';
import { FlatList } from 'native-base';
import Card from '../cards/Card';

const MoviesList = ({ navigation, movies }) => {
    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <Card navigation={navigation} item={item} />
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default MoviesList
