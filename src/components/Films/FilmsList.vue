<script>
import FilmCard from './FilmCard.vue';
export default {
    name: 'FilmsList',
    components: { FilmCard },
    props: {
        movies: Array,
        sectionTitle: String
    }
}
</script>

<template>
    <section>
        <div class="container my-5">
            <h2 class="my-5">{{ sectionTitle }}</h2>
            <ul class="row g-4">
                <FilmCard v-for="(movie, i) in movies" :key="movie.id" :productions="movie" />
            </ul>
        </div>
    </section>
</template>

<style></style>