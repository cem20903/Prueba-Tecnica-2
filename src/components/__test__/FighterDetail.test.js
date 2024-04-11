import { fireEvent, render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "../../router"
import App from "../../App.vue"
import { createPinia } from "pinia"
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

const mockFighterInfo = {
  response: [
    {
      name: "Felipe Bunes",
      age: 27,
      weight: "11 lib",
      nickname: "El duro",
      height: "5' 7'",
      photo: "https://media.api-sports.io/mma/teams/2655.png",
    },
  ],
}

jest.setTimeout(60000)

describe("Fights Detail", () => {
  it("Should see the correct fights list", async () => {
    router.push("/")

    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })

    const mockFetchFighterInfo = Promise.resolve({
      json: () => Promise.resolve(mockFighterInfo),
    })

    fetchMock.mockImplementationOnce(() => mockFetch)
    fetchMock.mockImplementationOnce(() => mockFetchFighterInfo)

    const pinia = createPinia()

    render(App, {
      global: {
        plugins: [router, pinia],
      },
    })

    const fighterLink = await screen.findByRole("link", {
      name: "Felipe Bunes",
    })

    fireEvent.click(fighterLink)

    await screen.findByRole("heading", { name: "Luchador" })

    await screen.findByText(/Felipe Bunes/)

    const name = screen.getByText(/Felipe Bunes/)
    const nickName = screen.getByText(/El duro/)

    expect(name).toBeInTheDocument()
    expect(nickName).toBeInTheDocument()
  })
})
