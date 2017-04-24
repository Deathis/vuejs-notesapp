<template>
    <div id='toolbar'>
        <div class="glyphicon glyphicon-plus" v-on:click="addNote"></div>
        <div class="glyphicon" v-bind:class="{'glyphicon-star-empty':!favorite,'glyphicon-star':favorite}" v-on:click="toggleFavorite "></div>
        <div class="glyphicon glyphicon-remove" v-on:click="deleteNote "></div>
    </div>
</template>

<script>  
export default {
    computed: {
        favorite() {
            var activeNote = this.$store.state.activeNote;
            return activeNote ? activeNote.favorite : false;
        }
    },
    methods: {
        addNote() {
            this.$store.commit('addNote');
        },
        toggleFavorite() {
            this.$store.commit('toggleFavorite');
        },
        deleteNote() {
            this.$store.commit('deleteNote');
        }
    }
};
</script>

<style scope>
#toolbar {
    display: flex;
    flex-shrink: 0;
    width: 80px;
    height: 100%;
    flex-direction: column;
    background-color: #30414D;
    color: darkcyan;
}

#toolbar div {
    font-size: 30px;
    margin: 35px 0px 0px 25px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
}
</style>