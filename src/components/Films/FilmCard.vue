<script>
export default {
    name: 'FilmCard',
    props: {
        movies: Array
    }
}
</script>

<template>
    <li v-for="movie in movies" :key="movie.id" class="col-3">
        <h4>{{ movie.name || movie.title }}</h4>
        <p>{{ movie.original_name || movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </li>
</template>

<style></style>