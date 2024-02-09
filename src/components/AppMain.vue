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

        <div v-if="store.films.length !== 0 && store.movies.length !== 0">
            <!-- Section Movies -->
            <FilmsList :movies="store.films" sectionTitle="Movies" />

            <!-- Section TV Series -->
            <FilmsList :movies="store.movies" sectionTitle="TV Series" />
        </div>

        <div v-else-if="store.genreFilms.length !== 0 && store.genreMovies.length !== 0">
            <!-- Section Movies Genres -->
            <FilmsList v-if="store.genreFilms.length !== 0" :movies="store.genreFilms" sectionTitle="Movies" />

            <!-- Section TV Series Genres -->
            <FilmsList v-if="store.genreMovies.length !== 0" :movies="store.genreMovies" sectionTitle="TV Series" />
        </div>

        <!-- Section Initial -->
        <SectionInitial v-else />
    </main>
</template>

<style></style>