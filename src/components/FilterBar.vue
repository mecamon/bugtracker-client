<template>
    <div class="filter-bar">
        <div class="filter-options">
            <div class="state-group">
                <p>State:</p>
                <select name="state">
                    <option value="">All</option>
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                </select>
            </div>
            <div class="date-group">
                <p>Date:</p>
                <select name="date">
                    <option value="">Ascendant</option>
                    <option value="">Descendant</option>
                </select>
            </div>
            <button class="btn btn-secondary">Go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterBar'
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