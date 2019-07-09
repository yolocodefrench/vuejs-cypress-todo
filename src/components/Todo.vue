<template>
    <div class="todo">
        <p>{{todo}}</p>
        <unicon class="unicon" name="times" fill="#FF5733" @click="$emit('remove')" />
    </div>
</template>
<script>
export default {
    name: 'todo',
    props: {
        todo: String,
    },
    created() {
        console.log(this.todo)
    }
}
</script>
<style lang="scss" scoped>
.todo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: #fff;

    p {
        font-family: sans-serif;
        font-size: 1.5em;
        color: grey;
        margin: 0;
    }

    .unicon {
        cursor: pointer;
    }
}
</style>
