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
            var activeNote = this.$store.state.activeNote;
            return activeNote ? activeNote.text : '';
        }
    },
    methods: {
        editNote(e) {
            this.$store.commit('editNote', { text: e.target.value });
        }
    }
};
</script>

<style scoped>
#editor {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 400px;
    height: 100%;
    overflow: hidden;
}

textarea {
    width: 100%;
    height: 100%;
}
</style>