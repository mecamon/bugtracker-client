<template>
    <div id="container">
        <Header />
        <SuperuserNav />
        <ModalCreateCompany v-if="createCompanyModal" />
        <router-view />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import SuperuserNav from '../components/SuperuserNav.vue'
import ModalCreateCompany from '../components/ModalCreateCompany.vue'


export default {
    components: {
        Header,
        SuperuserNav,
        ModalCreateCompany
    },
    data() {
        return {}
    },
    computed: {
        createCompanyModal() {
            return this.$store.getters['companies/getModalState']
        }
    },
    watch: {
        
    },
    methods: {}
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