<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: ''
    }),
    props: {
        placeholder: String
    },
    emits: ['submit-form']
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form', searchTerm)">
        <div class="input-group">
            <input type="text" class="form-control" :placeholder="placeholder" v-model.trim="searchTerm">
            <button class="btn" type="button" id="button-addon2">Cerca</button>
        </div>
    </form>
</template>

<style></style>