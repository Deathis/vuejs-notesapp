import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        notes: [],
        activeNote: {}
    },
    mutations: {
        addNote(state) {
            var newNote = {
                text: 'new note',
                favorite: false
            };
            state.notes.push(newNote);
            state.activeNote = newNote;
        },
        updateActiveNote(state, note) {
            state.activeNote = note;
        },
        editNote(state, text) {
            state.activeNote.text = text;
        },
        toggleFavorite(state) {
            if (state.activeNote) {
                state.activeNote.favorite = !state.activeNote.favorite;
            }
        },
        deleteNote(state) {
            var index = state.notes.indexOf(state.activeNote);
            state.notes.splice(index, 1);
            state.activeNote = state.notes.length >= 0 ? state.notes[0] : {};
        }
    }
});

export default store;