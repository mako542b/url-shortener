import LinkComponent from "../LinkComponent"
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react"
import { vi, describe, it, afterEach, expect } from "vitest"
import { linkInterface } from "../interfaces/generalInterfaces";

afterEach(cleanup)

let link : linkInterface = {
    code: 'code',
    shortLink: '12345.pl', 
    originalLink: 'http://098765434.pl', 
    index: 1
}

describe('Link component', () => {

    it('Element renders with all fields', async () => {
        let setLinks = vi.fn()
        let setCopied = vi.fn()
        render(<LinkComponent copied='null' setLinks={setLinks} setCopied={setCopied} link={link}/>)
        const originalLink = screen.getByText('http://098765434.pl')
        const shortLink = screen.getByText('12345.pl')
    })

    it('Interactions with buttons', async () => {
        let setLinks = vi.fn()
        let setCopied = vi.fn()
        render(<LinkComponent copied='null' setLinks={setLinks} setCopied={setCopied} link={link}/>)
        const linkComponent = screen.getByTestId('link')
        const copyButton = screen.getByRole('button', {name: /copy/i})
        fireEvent.click(copyButton)
        fireEvent.mouseOver(linkComponent)
    })

})