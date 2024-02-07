<script>
import SearchForm from './SearchForm.vue';
export default {
    name: 'AppHeader',
    components: { SearchForm }
}
</script>

<template>
    <!-- Header -->
    <header>
        <div class="title">
            <h1>Boolflix</h1>
        </div>
        <div class="form">
            <SearchForm placeholder="Cerca un film o una serie TV" />
        </div>
    </header>
</template>

<style></style>