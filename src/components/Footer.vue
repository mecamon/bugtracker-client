<template>
    <div class="footer">
        <span class="block-1">
            <p>Report bug</p>
            <p>Contact support</p>
            <p>Log out</p>
        </span>
        <span class="block-2">
            <p>Get info</p>
            <p>Help</p>
            <p>About</p>
        </span>
        <span class="block-3">
            <p>Tutorials</p>
        </span>
        <span class="block-4">
            <p>www.bug-tracker.net</p>
            <p>All rights reserved</p>
            <p>2020</p>
        </span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.footer {
    @include flexRow(center, space-between);
    width: 678px;
    height: 86px;
    p {
        font-size: 14px;
        color: $textColor3;
    }
    .block-1 {
        @include flexColumn(start, space-evenly);
        height: 100%;
    }
    .block-2 {
        @include flexColumn(start, space-evenly);
        height: 100%;
    }
    .block-3 {
        @include flexColumn(start, flex-start);
        height: 100%;
        p {
            margin-top: 8px;
        }
    }
    .block-4 {
        @include flexColumn(center, space-evenly);
        height: 100%;
    }
}
</style>