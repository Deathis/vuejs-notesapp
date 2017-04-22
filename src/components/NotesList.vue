<template>
    <div id="notesList">
        <h2>NOTES | COLIGO</h2>
        <div id="notesButton">
            <button>All Notes</button>
            <button>Favorites</button>
        </div>
        <div id="listContainer">
            <div class="g">
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
    background-color: gray;
    text-overflow: ellipsis;
}
</style>