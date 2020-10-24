<template>
    <div id="container">
        <Header />
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

#container {
    @include flexColumn(center, flex-start);
    width: 100%;
    height: 100vh;
}
</style>