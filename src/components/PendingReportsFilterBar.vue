<template>
    <div class="filter-bar">
        <div class="filter-options">
            <div class="state-group">
                <p>State:</p>
                <select name="state" v-model="state">
                    <option disabled value="" >All</option>
                    <option v-for="option in stateOptions"
                    :key="option.value" :value="option.value" 
                    >{{ option.text }}</option>
                </select>
            </div>
            <div class="date-group">
                <p>Date:</p>
                <select name="date" v-model="date">
                    <option disabled value="">Any</option>
                    <option v-for="option in dateOptions"
                    :key="option.value" :value="option.value" 
                    >{{ option.text }}</option>
                </select>
            </div>
            <button class="btn btn-secondary" @click="filterCompanies">Go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PendingReportsFilterBar',
    data() {
        return {
            date: '',
            state: '',
            dateOptions: [
                { text: 'Oldest', value: 1 }, 
                { text: 'Recent', value: -1 }, 
            ],
            stateOptions: [
                { text: 'Active', value: 'Active' }, 
                { text: 'Inactive', value: 'Inactive' }, 
            ],
        }
    },
    watch: {
        date: function (value) {
            this.$store.commit('users/addDateFilter', value)
        },
        state: function (value) {
            this.$store.commit('users/addStateFilter', value)
        },
    },
    computed: {},
    methods: {
        async filterCompanies() {
            await this.$store.dispatch('users/fetchCompanies')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.filter-bar {
    @include flexRow(center, flex-end);
    height: 57px;
    width: 1100px;
    // background-color: cadetblue;
    .filter-options {
        @include flexRow(center, space-between);
        width: 340px;
        height: 100%;
        // background-color: white;
        .state-group {
            @include flexRow();
            select {
                color: $textColor;
                width: 75px;
                height: 26px;
                border-radius: 13px;
                outline: none;
                border: none;
                text-indent: 5px;
            }
        }
        .date-group {
            @include flexRow();
            select {
                color: $textColor;
                width: 110px;
                height: 26px;
                border-radius: 13px;
                outline: none;
                border: none;
                text-indent: 5px;
            }
        }
        button {
            width: 56px;
            height: 26px;
        }
    }
}
</style>