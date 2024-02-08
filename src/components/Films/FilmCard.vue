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
        },
        flagSrc() {
            const url = new URL(`../../assets/img/${this.productions.original_language}.png`, import.meta.url);
            return url.href;
        },
        coverSrc() {
            if (!this.productions.poster_path) {
                return 'src/assets/img/not-image.jpg'
            }
            return `https://image.tmdb.org/t/p/w342/${this.productions.poster_path}`
        },
        voteAverage() {
            const voteRating = parseInt(this.productions.vote_average / 2)
            return voteRating
        },
    }
}
</script>

<template>
    <li class="col col-3">
        <div class="card">
            <figure>
                <img :src="coverSrc" :alt="productions.original_language" class="img-fluid cover-img">
            </figure>
            <div class="card-body text-center">
                <h3 class="card-title mb-4">{{ name }}</h3>
                <h6 class="card-subtitle mb-4">{{ originalTitle }}</h6>
                <div v-if="hasFlag" class="language-img">
                    <img :src="flagSrc" :alt="productions.original_language" class="mb-4 img-fluid img-lang">
                </div>
                <div v-else class="language-text">
                    <p>{{ productions.original_language }}</p>
                </div>
                <div class="rating-star">
                    <FontAwesomeIcon :icon="voteAverage > 0 ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="star" />
                    <FontAwesomeIcon :icon="voteAverage > 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="star" />
                    <FontAwesomeIcon :icon="voteAverage > 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="star" />
                    <FontAwesomeIcon :icon="voteAverage > 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="star" />
                    <FontAwesomeIcon :icon="voteAverage > 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="star" />
                </div>
            </div>
        </div>
    </li>
</template>

<style></style>