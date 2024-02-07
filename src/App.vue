<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';

// Variabili API
const endpointTv = 'https://api.themoviedb.org/3/search/tv'
const endpointMovie = 'https://api.themoviedb.org/3/search/movie'
const query = '?query='
const apiKey = '&api_key=8b15dd81bdce2600f4ff499a5c65a455'

export default {
    name: 'Boolflix',
    components: { AppHeader }
};
</script>

<template>
    <AppHeader />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>