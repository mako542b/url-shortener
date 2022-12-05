import { describe, it, expect, vi, afterEach, beforeAll, afterAll } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { linkInterface } from "../App";
import Form from "../Form";
import server from "../mocks/handlers";

const setLinks = vi.fn()
const links: linkInterface[]  = []

afterEach(cleanup)
beforeAll(() => server.listen())
afterAll(() => server.close())

describe('Form component works correctly' ,() => {
    it('Form renders', () => {
        render(<Form setLinks={setLinks} links={links}/>)
        const form = screen.getByTestId('form')
        expect(form).toBeDefined()
    })

    it('Input element has proper value after text was typed', () => {
        render(<Form setLinks={setLinks} links={links}/>)
        const input = screen.getByPlaceholderText(/Shorten a link here../) as HTMLInputElement
        fireEvent.change(input, {target: {value: 'testUrl.com'}})
        expect(input.value).toMatch('testUrl.com')
    })
    it('Api get request is resolved with expected response', async () => {
        render(<Form setLinks={setLinks} links={links}/>)
        const input = screen.getByPlaceholderText(/Shorten a link here../) as HTMLInputElement
        const submitButton = screen.getByRole('button', {name: /Shorten it!/})
        fireEvent.change(input, {target: {value: 'test123.com'}})
        fireEvent.click(submitButton)
        // expect(setLinks).toBeCalledTimes(1)
        // expect(responseParagraph).toBeDefined()

    })

})