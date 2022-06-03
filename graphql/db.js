import axios from 'axios';
const BASE_URL = 'https://yts.mx/api/v2/'
const LIST_URL = `${BASE_URL}list_movies.json?`
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json?`

export const getMovies = async(limit = 10, rating = 1) => {
    const {data: {data: {movies}}} = await axios(LIST_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    })
    return movies
}   

export const getMovie = async(id) => {
    const {data: {data: {movie}}} = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    })
    return movie
}   

export const getSuggestions = async(id) => {
    const {data: {data: {movies}}} = await axios(MOVIE_SUGGESTIONS_URL , {
        params: {
            movie_id: id
        }
    })
    return movies
}   