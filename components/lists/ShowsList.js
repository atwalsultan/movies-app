import * as React from 'react';
import { FlatList } from 'native-base';
import Card from '../cards/Card';

const ShowsList = ({ navigation, shows }) => {
    // const data = [
    //     { "adult": false, "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg", "genre_ids": [35, 28, 12, 878], "id": 550988, "original_language": "en", "original_title": "Free Guy", "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.", "popularity": 12439.174, "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg", "release_date": "2021-08-11", "title": "Free Guy", "video": false, "vote_average": 8, "vote_count": 1852 },
    //     { "adult": false, "backdrop_path": "/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg", "genre_ids": [28, 12], "id": 568620, "original_language": "en", "original_title": "Snake Eyes: G.I. Joe Origins", "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.", "popularity": 7120.237, "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg", "release_date": "2021-07-22", "title": "Snake Eyes: G.I. Joe Origins", "video": false, "vote_average": 7, "vote_count": 549 },
    //     { "adult": false, "backdrop_path": "/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg", "genre_ids": [878, 28], "id": 580489, "original_language": "en", "original_title": "Venom: Let There Be Carnage", "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.", "popularity": 3554.027, "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg", "release_date": "2021-09-30", "title": "Venom: Let There Be Carnage", "video": false, "vote_average": 7.4, "vote_count": 110 },
    //     { "adult": false, "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg", "genre_ids": [35, 28, 12, 878], "id": 5509888, "original_language": "en", "original_title": "Free Guy", "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.", "popularity": 12439.174, "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg", "release_date": "2021-08-11", "title": "Free Guy", "video": false, "vote_average": 8, "vote_count": 1852 },
    //     { "adult": false, "backdrop_path": "/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg", "genre_ids": [28, 12], "id": 5686200, "original_language": "en", "original_title": "Snake Eyes: G.I. Joe Origins", "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.", "popularity": 7120.237, "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg", "release_date": "2021-07-22", "title": "Snake Eyes: G.I. Joe Origins", "video": false, "vote_average": 7, "vote_count": 549 },
    //     { "adult": false, "backdrop_path": "/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg", "genre_ids": [878, 28], "id": 5804899, "original_language": "en", "original_title": "Venom: Let There Be Carnage", "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.", "popularity": 3554.027, "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg", "release_date": "2021-09-30", "title": "Venom: Let There Be Carnage", "video": false, "vote_average": 7.4, "vote_count": 110 }
    // ]

    return (
        <FlatList
            data={shows}
            renderItem={({ item }) => (
                <Card navigation={navigation} item={item} />
            )}

            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default ShowsList
