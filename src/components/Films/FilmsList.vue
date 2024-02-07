<script>
import { store } from '../../data/store.js'
export default {
    name: 'FilmsList',
    data: () => ({ store }),
}
</script>

<template>
    <section>
        <div class="container my-5">
            <h2>Movies</h2>
            <ul class="row g-4">
            </ul>
        </div>
    </section>
</template>

<style></style>