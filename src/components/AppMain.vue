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

        <!-- Section Initial -->
        <SectionInitial v-else />
    </main>
</template>

<style></style>