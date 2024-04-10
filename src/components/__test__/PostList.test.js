import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "../../router"
import App from "../../App.vue"

const fetchMock = jest.fn()
global.fetch = fetchMock

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const mockResponse = [{}]

test("routing", async () => {
  router.push("/")
  await router.isReady()

  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })

  fetchMock.mockImplementation(() => mockFetch)

  const wrapper = render(App, {
    global: {
      plugins: [router],
    },
  })

  screen.debug()
  expect(wrapper.html()).toContain("Welcome to the blogging app")
})
