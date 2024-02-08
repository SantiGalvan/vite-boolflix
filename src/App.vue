<script>
import axios from 'axios';
import { store } from './data/store.js'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// Variabili API
const endpointTv = 'https://api.themoviedb.org/3/search/tv';
const endpointMovie = 'https://api.themoviedb.org/3/search/movie';
const query = '?query=';
const apiKey = '&api_key=8b15dd81bdce2600f4ff499a5c65a455';

export default {
    name: 'Boolflix',
    components: { AppHeader, AppMain },
    methods: {
        fetchFilmName(term) {
            if (!store.filteredTerm) {
                store.films = [];
                store.movies = [];
                return
            }

            this.fetchApi(endpointTv, 'films');
            this.fetchApi(endpointMovie, 'movies');
        },
        fetchApi(endpoint, collection) {
            axios.get(`${endpoint}${query}${store.filteredTerm}${apiKey}`).then(res => {
                store[collection] = res.data.results
            })
        },
        filteredTerm(term) {
            store.filteredTerm = term;
        }
    }
};
</script>

<template>
    <AppHeader @search-form="fetchFilmName" @input-writes="filteredTerm" />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>