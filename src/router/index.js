import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../components/PostList.vue"),
  },
  {
    name: "Prueba",
    path: "/prueba",
    component: () => import("../components/Prueba.vue"),
  },
]

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes,
})

export default router
