<template>
    <div id="container">
        <Header />
        <CompaniesNav />
        <FilterBar />
        <CompaniesContainer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import CompaniesNav from '../components/CompaniesNav.vue'
import FilterBar from '../components/FilterBar.vue'
import CompaniesContainer from '../components/CompaniesContainer.vue'


export default {
    components: {
        Header,
        CompaniesNav,
        FilterBar,
        CompaniesContainer,
    },
    data() {
        return {

        }
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