import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react'
import RestaurentMenu from '../../components/RestaurentMenu'
import MOCK_DATA from '../../components/mocks/mockResMenuData.json'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import appStore from '../../utils/store/appStore'
import Header from '../Header'
import Cart from '../Cart'
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("Should load Restaurent Menu Component", async () => {
    await act (async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurentMenu/>
                <Cart />
            </Provider>
        </BrowserRouter>
    ))
    const accordianHeader = screen.getByText("Fried Momo (10)")

    fireEvent.click(accordianHeader)

    const foodItems = screen.getAllByTestId("foodItems")

    expect(foodItems.length).toBe(10)

    const addBtns = screen.getAllByRole("button", { name: "Add +"})

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
    
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    
    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(12)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))

    expect(screen.getAllByTestId("foodItems").length).toBe(10)

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
})