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
    width: 10%;
    height: 100%;
    flex-direction: column;
}
</style>