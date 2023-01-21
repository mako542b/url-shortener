import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { linkInterface } from "../interfaces/generalInterfaces";
import LinksContainer from "../LinksContainer";


const setLinks = vi.fn()
const links: linkInterface[]  = [
    {
        code:'test1',
        shortLink:'shortlinktest1',
        originalLink:'originalLongLinkTestnumber1',
        index:1
    },
    {
        code:'test2',
        shortLink:'shortlinktest2',
        originalLink:'originalLongLinkTestnumber2',
        index:2
    }
]

const emptyLinks: linkInterface[] = []

afterEach(cleanup)

describe('Link container works properly', () => {

    it('When passed 0 links, no link element renders', () => {
        render(<LinksContainer links={emptyLinks} setLinks={setLinks}/>)
        const allLinks = screen.queryAllByTestId('link')
        expect(allLinks.length).toEqual(0)
    })

    it('When passed 2 links, exactly 2 links renders', () => {
        render(<LinksContainer links={links} setLinks={setLinks}/>)
        const allLinks = screen.getAllByTestId('link')
        expect(allLinks.length).toEqual(2)
    })
})