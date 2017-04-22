import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
            }
            state.notes.push(newNote)
            state.activeNote = newNote
        },
        updateActiveNote(state, note) {
            state.activeNote = note
        },
        editNote(state, text) {
            state.activeNote.text = text
        }
    }
})

export default store