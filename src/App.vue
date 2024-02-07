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
    data: () => ({
        films: [],
        movies: []
    }),
    components: { AppHeader, AppMain },
    methods: {
        fetchFilmName(term) {
            const endpoint = `${endpointTv}${query}${term}${apiKey}`
            axios.get(endpoint).then(res => {
                this.films = res.data.results
            })
        }
    }
};
</script>

<template>
    <AppHeader @search-form="fetchFilmName" />
    <AppMain />
    <div class="container d-flex gap-4 mt-5 flex-wrap">
        <ul v-for="film in films" :key="film.id">
            <li>{{ film.name }}</li>
            <li>{{ film.original_name }}</li>
            <li>{{ film.original_language }}</li>
            <li>{{ film.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>