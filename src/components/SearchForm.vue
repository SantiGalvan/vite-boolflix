<script>
export default {
    name: 'SearchForm',
    props: {
        placeholder: String
    }
}
</script>

<template>
    <form>
        <div class="input-group">
            <input type="text" class="form-control" :placeholder="placeholder">
            <button class="btn" type="button" id="button-addon2">Cerca</button>
        </div>
    </form>
</template>

<style></style>