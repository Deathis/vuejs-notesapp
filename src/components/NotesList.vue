<template>
    <div id="notesList">
        <h2>NOTES | COLIGO</h2>
        <div id="notesButton">
            <button class="btn btn-default" v-bind:class="{active:show === 'all'}" v-on:click="showAll">All Notes</button>
            <button class="btn btn-default" v-bind:class="{active:show === 'favorites'}" v-on:click="showFavorites">Favorites</button>
        </div>
        <div id="listContainer">
            <NoteTitle :note="note" :key="note.id" v-for="note in filterNotes"></NoteTitle>
        </div>
    </div>
</template>
<script>
import NoteTitle from './NoteTitle.vue';
export default {
    data() {
        return {
            show: 'all'
        };
    },
    components: {
        NoteTitle
    },
    computed: {
        filterNotes() {
            if (this.show === 'all') {
                return this.$store.state.notes;
            }
            return this.$store.state.notes.filter(function (note) {
                return note.favorite;
            });
        }
    },
    methods: {
        showAll() {
            this.show = 'all';
        },
        showFavorites() {
            this.show = 'favorites';
        }
    }
};
</script>

<style scoped>
#notesList {
    flex-shrink: 0;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    width: 120px;
    height: 40px;
}

#listContainer {
    width: 100%;
    margin-top: 10px;
    overflow: auto;
}
</style>