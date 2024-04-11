import { render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "../../router"
import App from "../../App.vue"
import "@testing-library/jest-dom"

const fetchMock = jest.fn()
global.fetch = fetchMock

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const mockResponse = {
  response: [
    {
      category: "Flyweight",
      date: "2024-01-13T21:00:00+00:00",
      fighters: {
        first: {
          id: 2656,
          logo: "https://media.api-sports.io/mma/teams/2656.png",
          name: "Felipe Bunes",
          winner: false,
        },
        second: {
          id: 2656,
          logo: "https://media.api-sports.io/mma/teams/2655.png",
          name: "David Casas",
          winner: true,
        },
      },
      id: 1188,
      is_main: false,
      slug: "UFC Fight Night: Ankalaev vs. Walker 2",
      status: { long: "Finished", short: "FT" },
      time: "21:00",
      timestamp: 1705179600,
      timezone: "UTC",
    },
  ],
}

describe("Fights List", () => {
  it("Should see the correct fights list", async () => {
    router.push("/")

    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })

    fetchMock.mockImplementation(() => mockFetch)

    render(App, {
      global: {
        plugins: [router],
      },
    })

    await screen.findByRole("button", { name: "Detalles del combate" })

    const categoryText = screen.getByText("Categoria: Flyweight")
    const fighterOne = screen.getByText("Felipe Bunes")
    const fighterTwo = screen.getByText("David Casas")

    expect(categoryText).toBeInTheDocument()
    expect(fighterOne).toBeInTheDocument()
    expect(fighterTwo).toBeInTheDocument()
  })
})
