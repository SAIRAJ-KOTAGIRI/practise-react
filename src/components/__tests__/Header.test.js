import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from 'react-redux'
import appStore from '../../utils/store/appStore'
import Header from '../Header'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
    // const loginButton = screen.getByText("Login")
    // Assertion
    expect(loginButton).toBeInTheDocument();
})

it("Should load Header component with a Cart Items button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const cartItems = screen.getByRole("button", {name: "Cart (0)"})
    const cartItems = screen.getByText("Cart (0)")
    // Assertion
    expect(cartItems).toBeInTheDocument();
})

it("Should load Header component with a Cart Items button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const cartItems = screen.getByRole("button", {name: "Cart (0)"})
    const cartItems = screen.getByText(/Cart/)
    // Assertion
    expect(cartItems).toBeInTheDocument();
})

it("Should change Login Button to Logout Button on Click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"})
    // Assertion
    expect(logoutButton).toBeInTheDocument();
})