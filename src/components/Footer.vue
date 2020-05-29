<template>
  <footer>Copyright {{ getCurrentYear }} by <a :href="githubProfile" class="page-link"  target="_blank" rel="noopener noreferrer">Beto Costa</a></footer>

</template>

<script>
export default {
    data() {
        return {
            githubProfile: 'https://github.com/betocostadev',
            // pageLinkTheme: 'dark-page-link'
        }
    },

    computed: {
        getCurrentYear() {
            return new Date().getFullYear()
        }
    },

}
</script>

<style>
footer {
    margin-top: 2rem;
}
</style>
