import { reactive } from 'vue';

export const store = reactive({
    films: [],
    movies: [],
    filteredTerm: '',
    genres: [],
    selectOption: '',
    genreFilms: [],
    genreMovies: [],
    isLoading: false
});