<template>
    <div id="container">
        <Header />
        <UsersNav />
        <PendingUsers />
    </div>
</template>

<script>
import Header from '../components/Header'
import UsersNav from '../components/UsersNav'
import PendingUsers from '../views/PendingUsers'

export default {
    components: {
        Header,
        UsersNav,
        PendingUsers
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