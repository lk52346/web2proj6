<template>
    <div class="time-card">
        <span>Current time: {{ currentTime }}</span>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                currentTime: new Date().toLocaleTimeString("hr-HR")
            }
        },
        mounted() {
            window.setInterval(()=>{
                this.currentTime = new Date().toLocaleTimeString("hr-HR")
            }, 1000)
        }
    }
</script>

<style scoped>
    .time-card{
        background-color: aquamarine;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 5px;
        color: black;
        width: fit-content;
    }
</style>