<script>
import SearchForm from './SearchForm.vue';
export default {
    name: 'AppHeader',
    components: { SearchForm },
    emits: ['search-form', 'input-writes'],
    props: {
        genres: Array
    }
}
</script>

<template>
    <!-- Header -->
    <header>
        <div class="title">
            <h1>Boolflix</h1>
        </div>
        <div class="form">
            <SearchForm placeholder="Cerca un film o una serie TV" @submit-form="$emit('search-form')" buttonLabel="Cerca"
                @input-change="$emit('input-writes', $event)" :genres="genres" />
        </div>
    </header>
</template>

<style></style>