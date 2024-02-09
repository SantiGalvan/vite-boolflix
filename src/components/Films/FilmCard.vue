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
                <div class="language-img d-flex justify-content-center gap-4">
                    <img v-if="hasFlag" :src="flagSrc" :alt="productions.original_language" class="mb-4 img-fluid img-lang">
                    <div v-else class="language-text">
                        <p>{{ productions.original_language }}</p>
                    </div>
                    <div v-if="productions.adult" class="age-adult mb-4">+18</div>
                    <div v-else class="age-kid mb-4"></div>
                </div>
                <div class="rating-star mb-4">
                    <FontAwesomeIcon v-for="n in 5" :icon="[n <= voteAverage ? 'fas' : 'far', 'star']" class="star" />
                </div>
                <div class="date" v-if="productions.first_air_date">
                    <h6>Anno publicazione</h6>
                    <p>{{ productions.first_air_date }}</p>
                </div>
                <div class="storyline" v-if="productions.overview">
                    <h6>Trama</h6>
                    <p>{{ productions.overview }}</p>
                </div>
            </div>
        </div>
    </li>
</template>

<style></style>