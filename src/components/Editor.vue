<template>
    <div id="editor">
        <textarea v-bind:value="activeText" v-on:input="editNote">
        </textarea>
    </div>
</template>

<script>
export default {
    computed: {
        activeText() {
            var activeNote = this.$store.state.activeNote
            return activeNote ? activeNote.text : ""
        }
    },
    methods: {
        editNote(e) {
            this.$store.commit('editNote', e.target.value)
        }
    }
}
</script>

<style scope>
#editor {
    width: 75%;
    height: 100%;
}

textarea {
    width: 100%;
    height: 100%;
}
</style>