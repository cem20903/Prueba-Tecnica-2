import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../components/PostList.vue"),
  },
  {
    name: "details",
    path: "/details/:id",
    component: () => import("../components/PostDetail.vue"),
  },
]

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes,
})

export default router
