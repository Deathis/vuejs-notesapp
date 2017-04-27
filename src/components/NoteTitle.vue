<template>
    <div @click="updateActiveNote(note)" :class="classItems">
        <h4>{{note.text}}</h4>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props: [
        'note'
    ],
    computed: mapState({
        classItems: function (state) {
            return {
                active: state.activeNote.id === this.note.id
            };
        }
    }),
    methods: mapMutations(['updateActiveNote'])
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