import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SongsView from "../views/SongsView.vue"
import GameView from "../views/GuessingGameView.vue"
import NotFound from "../views/NotFound.vue"
import LoginView from "../views/LoginView.vue"

import { useAuthStore } from "@/stores/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/songs/:id?",
      name: "songs",
      component: SongsView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView
    },{
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound
    }
  ],
});

router.beforeEach(async (to)=>{
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  if (authRequired && !auth.isAuthenticated) {
    auth.setLandingUrl(to.fullPath);
    return "/login";
  }
})

export default router;
