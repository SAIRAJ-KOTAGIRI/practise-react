import { render, screen } from "@testing-library/react"
import Restaurent from '../../components/Restaurent'
import MOCK_DATA from '../mocks/restaurentMock.json'
import "@testing-library/jest-dom"

it("Should render Restaurent Component with Props", () => {
    render(<Restaurent resObj={MOCK_DATA}/>)
    const name = screen.getByText("Wow! Momo")
    expect(name).toBeInTheDocument()
})