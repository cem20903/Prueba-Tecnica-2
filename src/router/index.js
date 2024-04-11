import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../components/FightsList.vue"),
  },
  {
    name: "details",
    path: "/details/:id",
    component: () => import("../components/FighterDetail.vue"),
  },
]

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes,
})

export { routes }

export default router
