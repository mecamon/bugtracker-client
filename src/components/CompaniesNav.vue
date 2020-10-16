<template>
    <div class="nav">
        <div id="routes">
            <router-link to="/companies">Companies</router-link>
            <router-link to="#">Messages</router-link>
            <router-link to="#">Create company</router-link>
        </div>
        <span id="search">
            <input type="text" placeholder="Search">
            <img src="../assets/search.svg" alt="search-icon">
        </span>
    </div>
</template>

<script>
export default {
    name: 'CompaniesNav'
    
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

    .nav {
        @include flexRow(center, space-between);
        width: 1100px;
        height: 38px;
        // background-color: red;
        #routes {
            width: 476px;
            height: 100%;
            @include flexRow(center, space-between);
            // background-color: black;
        }
        #search {
            @include flexRow(center, space-between);
            width: 340px;
            height: 100%;
            background-color: $lightBackgroundColor;
            img {
                width: 32px;
                height: auto;
                margin-right: 5px;
            }
            input {
                background-color: $lightBackgroundColor;
                border: none;
                height: 100%;
                width: 300px;
                color: #ffffff;
                font-size: 16px;
                text-indent: 5px;
            }
        }
    }
</style>