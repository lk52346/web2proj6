<template>
    <h1>Songs</h1>
    <time-card></time-card>
    <div class="container">
        <song-card v-for="song in songs" v-bind="song" @like-song="likeSong"></song-card>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                songs: []
            }
        },
        mounted() {
            fetch('https://run.mocky.io/v3/8dc6ef12-9c68-4c61-a06d-26a5007633bc')
                .then(response => response.json())
                .then(data => {
                    this.songs = data
                })
        },
        methods: {
            likeSong(args){
                let song = this.songs.find(el => el.id==args.id)
                if(!song)
                    return
                song.liked=!song.liked;
            }
        }
    }
</script>

<style>
    .container{
        display: flex;
        flex-direction: row;
    }
</style>