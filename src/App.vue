<script>
import axios from 'axios';
import { store } from './data/store.js'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// Variabili API
const endpointGenersList = 'https://api.themoviedb.org/3/genre/movie/list?'
const endpointTvSeries = 'https://api.themoviedb.org/3/search/tv';
const endpointMovie = 'https://api.themoviedb.org/3/search/movie';
const query = '?query=';
const apiKey = 'api_key=8b15dd81bdce2600f4ff499a5c65a455';
const endpointGenersMovies = 'https://api.themoviedb.org/3/discover/movie?with_genres='
const endpointGenersTvSeries = 'https://api.themoviedb.org/3/discover/tv?with_genres='


export default {
    name: 'Boolflix',
    data: () => ({ store }),
    components: { AppHeader, AppMain },
    created() {
        axios.get(`${endpointGenersList}&${apiKey}`).then(res => {
            store.genres = res.data.genres
        })
    },
    methods: {
        fetchFilmName() {
            if (!store.filteredTerm) {
                store.tvSeries = [];
                store.movies = [];
                return
            }

            store.genreFilms = [];
            store.genreMovies = [];

            this.fetchApi(endpointTvSeries, 'tvSeries', store.filteredTerm, query);
            this.fetchApi(endpointMovie, 'movies', store.filteredTerm, query);
        },
        fetchApi(endpoint, collection, option, query = '') {
            axios.get(`${endpoint}${query}${option}&${apiKey}`).then(res => {
                store[collection] = res.data.results
            })
        },
        filteredTerm(term) {
            store.filteredTerm = term;
        },
        fetchMovieGenre(option) {
            store.selectOption = option
            if (!option) {
                store.genreTvSeries = [];
                store.genreMovies = [];
                return
            }

            store.tvSeries = [];
            store.movies = [];

            this.fetchApi(endpointGenersMovies, 'genreMovies', store.selectOption)
            this.fetchApi(endpointGenersTvSeries, 'genreTvSeries', store.selectOption)
        }
    }
};
</script>

<template>
    <AppHeader @search-form="fetchFilmName" @input-writes="filteredTerm" @select-genre="fetchMovieGenre"
        :genres="store.genres" />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>