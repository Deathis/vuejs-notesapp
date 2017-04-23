<template>
    <div id="notesList">
        <h2>NOTES | COLIGO</h2>
        <div id="notesButton">
            <button class="btn btn-default" v-bind:class="{active:show === 'all'}" v-on:click="showAll">All Notes</button>
            <button class="btn btn-default" v-bind:class="{active:show === 'favorites'}" v-on:click="showFavorites">Favorites</button>
        </div>
        <div id="listContainer">
            <div v-on:click="updateActiveNote(note)" class="g" v-bind:class="{active:activeNote === note}" v-for="note in filterNotes">
                <h4>{{note.text}}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: 'all'
        }
    },
    computed: {
        filterNotes() {
            if (this.show === 'all') {
                return this.$store.state.notes
            }
            return this.$store.state.notes.filter(function (note) {
                return note.favorite
            })
        },
        activeNote() {
            return this.$store.state.activeNote
        }
    },
    methods: {
        updateActiveNote(note) {
            this.$store.commit('updateActiveNote', note)
        },
        showAll() {
            this.show = 'all'
        },
        showFavorites() {
            this.show = 'favorites'
        }
    }
}
</script>

<style scope>
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
}

.g {
    width: 100%;
    height: 45px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.active {
    background-color: lightskyblue;
}
</style>