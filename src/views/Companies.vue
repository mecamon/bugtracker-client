<template>
    <div id="container">
        <Header />
        <CompaniesNav />
        <FilterBar />
        <CompaniesContainer />
        <ModalCreateCompany v-if="showModal" />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import CompaniesNav from '../components/CompaniesNav.vue'
import FilterBar from '../components/FilterBar.vue'
import CompaniesContainer from '../components/CompaniesContainer.vue'
import ModalCreateCompany from '../components/ModalCreateCompany.vue'


export default {
    components: {
        Header,
        CompaniesNav,
        FilterBar,
        CompaniesContainer,
        ModalCreateCompany
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        switchModalVisibility(newState) {
            this.showModal = newState
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