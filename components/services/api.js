import { API_KEY, BASE_URL } from '../config/api_config'

export const fetchMovies = async (movieType) => {
  const url = `${BASE_URL}/movie/${movieType}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.results;
  } 
  catch (error) {
    throw error;
  }
}

export const fetchShows = async (showType) => {
    const url = `${BASE_URL}/tv/${showType}?api_key=${API_KEY}&language=en-US&page=1`;

    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson.results;
    }
    catch(error) {
        throw error;
    }
}

export const fetchSearchResults = async (searchInput, searchType) => {
    const url = `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchInput}`;

    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson.results;
    }
    catch(error) {
        throw error;
    }
}

export const fetchDetails = async (mediaType, id) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=45bda5ff71a48f360109983797023114&language=en-US&page=1`;

  try {
      const response = await fetch(url);
      const responseJson = await response.json();
      
      return {
        title: responseJson.original_name ? responseJson.original_name : responseJson.original_title,
        poster_path: responseJson.poster_path,
        overview: responseJson.overview,
        popularity: responseJson.popularity,
        releaseDate: responseJson.release_date ? responseJson.release_date : responseJson.first_air_date,
      };
  }
  catch (error) {
      throw error;
  }
}
