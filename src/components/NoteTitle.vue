<template>
    <div @click="updateActiveNote(note)" :class="{active:activeNote.id === note.id}">
        <h4>{{note.text}}</h4>
    </div>
</template>

<script>
export default {
    props: [
        'note'
    ],
    computed: {
        activeNote() {
            return this.$store.state.activeNote;
        }
    },
    methods: {
        updateActiveNote() {
            this.$store.commit('updateActiveNote', this.note);
        }
    }
};
</script>

<style scoped>
.active {
    background-color: darkcyan;
}

div {
    width: 100%;
    height: 45px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>