<template>
    <div id='toolbar'>
        <div v-on:click="addNote">add</div>
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
    },
    methods: {
        addNote() {
            this.$store.commit('addNote')
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