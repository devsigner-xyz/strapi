<template>
    <h1>Homepage</h1>
    <Articles />
</template>

<script>
import Articles from '../containers/Articles.vue'
export default {
    name: 'AppHeader',
    components: {
        Articles
    }
}
</script>