<script>
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: ''
    }),
    props: {
        placeholder: String
    }
}
</script>

<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" :placeholder="placeholder" v-model="searchTerm">
            <button class="btn" type="button" id="button-addon2">Cerca</button>
        </div>
    </form>
</template>

<style></style>