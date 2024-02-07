<script>
import { store } from '../data/store.js'
import FilmsList from './Films/FilmsList.vue';
export default {
    name: 'AppMain',
    data: () => ({ store }),
    components: { FilmsList }
}
</script>

<template>
    <!-- Main -->
    <main>

        <!-- Section Movies -->
        <FilmsList v-if="store.films.length !== 0" :tv="store.films" sectionTitle="Movies" />

        <!-- Section TV Series -->
        <FilmsList v-if="store.movies.length !== 0" :tv="store.movies" sectionTitle="TV Series" />
    </main>
</template>

<style></style>