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

        <div v-if="store.tvSeries.length !== 0 || store.movies.length !== 0">
            <!-- Section Movies -->
            <FilmsList :movies="store.movies" sectionTitle="Movies" />

            <!-- Section TV Series -->
            <FilmsList :movies="store.tvSeries" sectionTitle="TV Series" />
        </div>

        <div v-else-if="store.genreTvSeries.length !== 0 || store.genreMovies.length !== 0">
            <!-- Section Movies Genres -->
            <FilmsList :movies="store.genreMovies" sectionTitle="Movies" />

            <!-- Section TV Series Genres -->
            <FilmsList :movies="store.genreTvSeries" sectionTitle="TV Series" />
        </div>

        <!-- Section Initial -->
        <SectionInitial v-else />
    </main>
</template>

<style></style>