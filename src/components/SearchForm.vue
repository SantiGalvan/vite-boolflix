<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: ''
    }),
    props: {
        placeholder: String,
        buttonLabel: String
    },
    emits: ['submit-form', 'input-change']
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form')">
        <div class="input-group">
            <input type="text" class="form-control" @keyup="$emit('input-change', searchTerm)" :placeholder="placeholder"
                v-model.trim="searchTerm">
            <button class="btn">{{ buttonLabel }}</button>
        </div>
    </form>
</template>

<style></style>