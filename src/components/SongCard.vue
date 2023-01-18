<template>
    <div :class="{ liked: liked, card: true}" :id="id">
        <img :src="image" class="slika"/>
        <h5 style="padding-top: 10px">{{ name }}</h5>
        <div class="bottom">
            <h6>{{ duration }}</h6>
            <img class="like" @click="like" :src="liked ? 'https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-13-512.png' : 'https://www.svgrepo.com/show/243653/like.svg'" width="25" height="25" />
        </div>
    </div>
</template>

<script>
    export default {
        emits: ["likeSong"],
        props: ["id", "name", "duration", "image", "liked"],
        methods: {
            like(){
                this.$emit("likeSong", {id: this.id})
            }
        }
    }
</script>

<style scoped>
    .card{
        margin: 10px;
        background-color: aquamarine;
        color: black;
        border-radius: 10px;
        overflow: hidden;
        display: grid;
        grid-template-rows: 6fr 2fr 1fr;
        width: 350px;
        height: 500px;
        justify-items: center;
        padding-bottom: 10px;
    }

    .card h5 {
        font-weight: 600;
        font-size: 20px;
    }

    .card h6 {
        font-size: 14px;
    }

    .like:hover{
        cursor: pointer;
    }
    .liked {
        background-color: aliceblue !important;
    }

    .slika{
        min-width: 100%;
        min-height: 100%;
        height: 200px;
    }

    .bottom{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        width: 100%;
    }
</style>