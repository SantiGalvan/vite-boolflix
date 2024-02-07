<script>
import FilmCard from './FilmCard.vue';
export default {
    name: 'FilmsList',
    components: { FilmCard },
    props: {
        tv: Array,
        sectionTitle: String
    }
}
</script>

<template>
    <section>
        <div class="container my-5">
            <h2 class="my-5">{{ sectionTitle }}</h2>
            <ul class="row g-4">
                <FilmCard :movies="tv" />
            </ul>
        </div>
    </section>
</template>

<style></style>