<script>
import { store } from '../data/store.js'
import FilmsList from './Films/FilmsList.vue';
import SectionInitial from './SectionInitial.vue';
export default {
    name: 'AppMain',
    data: () => ({ store }),
    components: { FilmsList, SectionInitial }
}
</script>

<template>
    <!-- Main -->
    <main>

        <!-- Section Movies -->
        <FilmsList v-if="store.films.length !== 0" :movies="store.films" sectionTitle="Movies" />

        <!-- Section TV Series -->
        <FilmsList v-if="store.movies.length !== 0" :movies="store.movies" sectionTitle="TV Series" />

        <!-- Section Movies Genres -->
        <FilmsList v-if="store.genreFilms.length !== 0" :movies="store.genreFilms" sectionTitle="Movies" />

        <!-- Section TV Series Genres -->
        <FilmsList v-if="store.genreMovies.length !== 0" :movies="store.genreMovies" sectionTitle="TV Series" />

        <!-- Section Initial -->
        <SectionInitial v-else />
    </main>
</template>

<style></style>