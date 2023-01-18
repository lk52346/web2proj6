<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <div>Please enter your name:</div>
        <input placeholder="Name" v-model.trim="username"/>
        <button type="submit">Login</button>
    </form>
    
</template>

<script>
    import { mapActions, mapState } from "pinia";
    import { useAuthStore } from "@/stores/auth";
    export default
    {
        data() {
            return {
                username: "",
            };
        },
        computed: {
            ...mapState(useAuthStore, ["landingUrl"]),
        },
        methods: {
            ...mapActions(useAuthStore, ["setUsername"]),
            login() {
                // sve puštamo, naravno inače treba provjeriti
                this.setUsername(this.username);
                this.$router.push({ path: this.landingUrl });
            },
        },
    };
</script>