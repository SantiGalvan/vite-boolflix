<script>
export default {
    name: 'FilmCard',
    props: {
        productions: Object
    },
    computed: {
        name() {
            return this.productions.name || this.productions.title
        },
        originalTitle() {
            return this.productions.original_name || this.productions.original_title
        },
        hasFlag() {
            const flags = ['en', 'it'];
            return flags.includes(this.productions.original_language);
        }
    }
}
</script>

<template>
    <li class="col-3">
        <h4>{{ name }}</h4>
        <p>{{ originalTitle }}</p>
        <img v-if="hasFlag" :src="`src/assets/img/${productions.original_language}.png`"
            :alt="productions.original_language" class="img-fluid img-lang">
        <p v-else>{{ productions.original_language }}</p>
        <p>{{ productions.vote_average }}</p>
    </li>
</template>

<style></style>