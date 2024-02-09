import { reactive } from 'vue';

export const store = reactive({
    tvSeries: [],
    movies: [],
    filteredTerm: '',
    genres: [],
    selectOption: '',
    genreTvSeries: [],
    genreMovies: [],
    isLoading: false
});