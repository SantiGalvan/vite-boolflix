<script>
import { store } from '../data/store.js'
import FilmsList from './Films/FilmsList.vue';
import SectionInitial from './SectionInitial.vue';
export default {
    name: 'AppMain',
    data: () => ({ store }),
    components: { FilmsList, SectionInitial },
    computed: {
        fetchSearch() {
            return this.store.tvSeries.length !== 0 || this.store.movies.length !== 0
        },
        fetchGenre() {
            return store.genreTvSeries.length !== 0 || store.genreMovies.length !== 0
        }
    }
}
</script>

<template>
    <!-- Main -->
    <main>

        <AppLoader v-if="store.isLoading" />

        <div v-if="fetchSearch">
            <!-- Section Movies -->
            <FilmsList v-if="store.movies.length !== 0" :movies="store.movies" sectionTitle="Movies" />

            <!-- Section TV Series -->
            <FilmsList v-if="store.tvSeries.length !== 0" :movies="store.tvSeries" sectionTitle="TV Series" />
        </div>

        <div v-else-if="fetchGenre">
            <!-- Section Movies Genres -->
            <FilmsList v-if="store.genreMovies.length !== 0" :movies="store.genreMovies" sectionTitle="Movies" />

            <!-- Section TV Series Genres -->
            <FilmsList v-if="store.genreTvSeries.length !== 0" :movies="store.genreTvSeries" sectionTitle="TV Series" />
        </div>

        <!-- Section Initial -->
        <SectionInitial v-else />
    </main>
</template>

<style></style>