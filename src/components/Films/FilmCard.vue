<script>
export default {
    name: 'FilmCard',
    props: {
        productions: Object
    },
}
</script>

<template>
    <li class="col-3">
        <h4>{{ productions.name || productions.title }}</h4>
        <p>{{ productions.original_name || productions.original_title }}</p>
        <img v-if="productions.original_language === 'en' || productions.original_language === 'it'"
            :src="`src/assets/img/${productions.original_language}.png`" :alt="productions.original_language"
            class="img-fluid img-lang">
        <p v-else>{{ productions.original_language }}</p>
        <p>{{ productions.vote_average }}</p>
    </li>
</template>

<style></style>