<template>
    <div id="notesList">
        <h2>NOTES | COLIGO</h2>
        <div id="notesButton">
            <button>All Notes</button>
            <button>Favorites</button>
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
    computed: {
        filterNotes() {
            return this.$store.state.notes
        },
        activeNote() {
            return this.$store.state.activeNote
        }
    },
    methods: {
        updateActiveNote(note) {
            this.$store.commit('updateActiveNote', note)
        }
    }
}
</script>

<style scope>
#notesList {
    width: 20%;
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