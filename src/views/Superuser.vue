<template>
    <div id="container">
        <Header />
        <SuperuserNav />
        <ModalCreateCompany v-if="createCompanyModal" />
        <ModalEditCompany v-if="editCompanyModal" />
        <ModalEditConfirm v-if="modalEditConfirm" />
        <ModalDeactivateConfirm v-if="modalDeactivateConfirm" />
        <ModalDeleteConfirm v-if="modalDeleteConfirm" />
        <ModalCreateSupervisor v-if="modalCreateSupervisor" />
        <ModalSupervisorCreated v-if="modalSupervisorCreated"/>
        <router-view />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import SuperuserNav from '../components/SuperuserNav.vue'
import ModalCreateCompany from '../components/ModalCreateCompany.vue'
import ModalEditCompany from '../components/ModalEditCompany.vue'
import ModalEditConfirm from '../components/ModalEditConfirm.vue'
import ModalDeactivateConfirm from '../components/ModalDeactivateConfirm.vue'
import ModalDeleteConfirm from '../components/ModalDeleteConfirm.vue'
import ModalCreateSupervisor from '../components/ModalCreateSupervisor.vue'
import ModalSupervisorCreated from '../components/ModalSupervisorCreated.vue'

export default {
    components: {
        Header,
        SuperuserNav,
        ModalCreateCompany,
        ModalEditCompany,
        ModalEditConfirm,
        ModalDeactivateConfirm,
        ModalDeleteConfirm,
        ModalCreateSupervisor,
        ModalSupervisorCreated
    },
    computed: {
        createCompanyModal() {
            return this.$store.getters['companies/getCreateModalState']
        },
        editCompanyModal() {
            return this.$store.getters['companies/getEditModalState']
        },
        modalEditConfirm() {
            return this.$store.getters['companies/getModalEditConfirm']
        },
        modalEditConfirm() {
            return this.$store.getters['companies/getModalEditConfirm']
        },
        modalDeactivateConfirm() {
            return this.$store.getters['companies/getDeactivateModal']
        },
        modalDeleteConfirm() {
            return this.$store.getters['companies/getModalDeleteConfirm']
        },
        modalCreateSupervisor() {
            return this.$store.getters['auth/getModalCreateSupervisor']
        },
        modalSupervisorCreated() {
            return this.$store.getters['auth/getModalSupervisorCreated']
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