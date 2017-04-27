<template>
    <div id="app">
        <Toolbar></Toolbar>
        <NotesList></NotesList>
        <Editor></Editor>
    </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NotesList from './components/NotesList.vue';
import Editor from './components/Editor.vue';
export default {
    name: 'app',
    components: {
        Toolbar,
        NotesList,
        Editor
    }
};
</script>
<style >
html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
}

#app {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>