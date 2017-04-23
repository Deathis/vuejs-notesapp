<template>
    <div id='toolbar'>
        <div v-on:click="addNote">add</div>
        <div v-bind:class="{favorite:favorite}" v-on:click="toggleFavorite">favorite</div>
        <div v-on:click="deleteNote">delete</div>
    </div>
</template>

<script>  
export default {
    computed: {
        favorite() {
            var activeNote = this.$store.state.activeNote
            return activeNote ? activeNote.favorite : false
        }
    },
    methods: {
        addNote() {
            this.$store.commit('addNote')
        },
        toggleFavorite() {
            this.$store.commit('toggleFavorite')
        },
        deleteNote() {
            this.$store.commit('deleteNote')
        }
    }
}
</script>

<style scope>
#toolbar {
    display: flex;
    width: 80px;
    height: 100%;
    flex-direction: column;
    background-color: #30414D;
    color: #767676;
}

.favorite {
    color: red;
}
</style>