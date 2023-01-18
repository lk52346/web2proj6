import { createApp } from "vue";
import { createPinia } from "pinia";
import SongCard from "./components/SongCard.vue"
import TimeCard from "./components/TimeCard.vue"

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('song-card', SongCard);
app.component('time-card', TimeCard);

app.mount("#app");
