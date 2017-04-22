<template>
    <div id='toolbar'>
        <div>add</div>
        <div>favorite</div>
        <div>delete</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notes: []
        }
    }
}
</script>

<style scope>
#toolbar {
    display: flex;
    width: 5%;
    height: 100%;
    flex-direction: column;
    background-color: #30414D;
    color: #767676;
}
</style>