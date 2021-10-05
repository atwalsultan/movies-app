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
