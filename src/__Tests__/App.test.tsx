import { describe, expect, it, afterEach, afterAll, beforeAll, vi } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import server from "../__mocks__/handlers";
import App from '../App'

afterEach(cleanup)
beforeAll(() => server.listen())
afterAll(() => server.close())

describe('Initial test', () => {
    it('App element initially renders without links container', () => {
        render(<App/>)
        const textInput = screen.getAllByPlaceholderText(/Shorten a link here../)[0] as HTMLInputElement
        const submitButton = screen.getAllByRole('button', {name:/shorten it/i})[0] as HTMLButtonElement
        const linksContainer = screen.queryByTestId(/links-container/)
        expect(linksContainer).toBeFalsy()
        const linksArray = screen.queryAllByTestId('link')
        expect(linksArray).toHaveLength(0)
    })

    it('After submitting a form, new link element renders', async () => {
        render(<App/>)
        const textInput = screen.getAllByPlaceholderText(/Shorten a link here../)[0] as HTMLInputElement
        const submitButton = screen.getAllByRole('button', {name:/shorten it/i})[0] as HTMLButtonElement
        fireEvent.change(textInput, {target: {value: 'test123.com'}})
        fireEvent.click(submitButton)
        const linkContainer = await screen.findByTestId('links-container')
        const links = screen.queryAllByTestId('link')
        expect(linkContainer).not.toBeFalsy()
        expect(links).toHaveLength(1)
    })

    it('Submitting form 3 times with different valuses adds 3 link elements', async () => {
        render(<App/>)

        const textInput = screen.getAllByPlaceholderText(/shorten a link here/i)[0] as HTMLInputElement
        const submitButton = screen.getAllByRole('button', {name: /shorten it/i})[0] as HTMLButtonElement
      
        fireEvent.change(textInput, {target: {value: 'test1.com'}})
        fireEvent.click(submitButton)
        
        fireEvent.change(textInput, {target: {value: 'test2.com'}})
        fireEvent.click(submitButton)


        fireEvent.change(textInput, {target: {value: 'test3.com'}})
        fireEvent.click(submitButton)
        
        // Despite cleanup, one list element from previous test is retrieved from local storage
        await waitFor(() => expect(screen.getAllByTestId('link')).toHaveLength(4))
    })
})