<template>
    <div id='toolbar'>
        <div v-on:click="addNote">add</div>
        <div v-bind:class="{favorite:favorite}" v-on:click="toggleFavorite">favorite</div>
        <div>delete</div>
    </div>
</template>

<script>  
export default {
    computed: {
        favorite() {
            return this.$store.state.activeNote.favorite
        }
    },
    methods: {
        addNote() {
            this.$store.commit('addNote')
        },
        toggleFavorite() {
            this.$store.commit('toggleFavorite')
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

.favorite {
    color: red;
}
</style>