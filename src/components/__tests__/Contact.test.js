import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {


    beforeAll(() => {
        console.log("Before All")
    })

    beforeEach(() => {
        console.log("Before Each")
    })

    afterAll(() => {
        console.log("After All")
    })
    
    afterEach(() => {
        console.log("After Each")
    })

    it("Should Load the Contact US Component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading")
    
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should Load Button inside the Contact US Component", () => {
        render(<Contact/>);
        const buttons = screen.getByRole("button")
    
        // Assertion
        expect(buttons).toBeInTheDocument()
    })
    
    test("Should Load Button Text inside the Contact US Component", () => {
        render(<Contact/>);
        const submittext = screen.getByText("Submit")
    
        // Assertion
        expect(submittext).toBeInTheDocument();
    })
    
    test("Should Load input name by placeholder inside the Contact US Component", () => {
        render(<Contact/>);
        const placeholderText = screen.getByPlaceholderText("name")
    
        // Assertion
        expect(placeholderText).toBeInTheDocument();
    })
    
    test("Should Load 2 input boxes inside the Contact US Component", () => {
        render(<Contact/>);
        const inputboxes = screen.getAllByRole("textbox")
    
        // Assertion
        expect(inputboxes.length).toBe(2);
    })
    
    test("Should Load 2 input boxes inside the Contact US Component", () => {
        render(<Contact/>);
        const inputboxes = screen.getAllByRole("textbox")
    
        // Assertion
        expect(inputboxes.length).not.toBe(3);
    })
})

