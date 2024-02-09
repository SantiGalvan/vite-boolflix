<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: '',
        selectOption: ''
    }),
    props: {
        placeholder: String,
        buttonLabel: String,
        genres: Array
    },
    emits: ['submit-form', 'input-change']
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form')" class="d-flex gap-2">
        <select class="form-select" v-model="selectOption">
            <option value="">All</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
        <div class="input-group">
            <input type="text" class="form-control" @keyup="$emit('input-change', searchTerm)" :placeholder="placeholder"
                v-model.trim="searchTerm">
            <button class="btn">{{ buttonLabel }}</button>
        </div>
    </form>
</template>

<style></style>