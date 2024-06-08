import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import Body from '../Body'
import MOCK_DATA from '../mocks/mockResListData.json'
import { Provider } from "react-redux"
import appStore from "../../utils/store/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Render the Body Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>
    ))

    const searchBtn = screen.getByRole('button', {name: "Search"})
    // Assertion
    expect(searchBtn).toBeInTheDocument()
})


it("Should Render the Body Component with Search Text", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>
    ))
    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(9)
    const searchBtn = screen.getByRole('button', {name: "Search"})
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, {
        target: { value: "pizza" }
    })
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    // Assertion - screen should find Restaurent cards
    expect(cardsAfterSearch.length).toBe(1)
})

it("Should Filter Top Rated Restaurent", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>
    ))
    const cardsBeforeFilter = screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(9)
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurent"})
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard")
    // Assertion - screen should find Restaurent cards
    expect(cardsAfterFilter.length).toBe(6)
})