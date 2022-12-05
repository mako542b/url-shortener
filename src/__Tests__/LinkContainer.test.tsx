import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup, getAllByAltText } from "@testing-library/react";
import { linkInterface } from "../App";
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

afterEach(cleanup)

describe('Link container works properly', () => {
    it('Element renders', () => {
        render(<LinksContainer links={links} setLinks={setLinks}/>)
    })
    it('When passed 2 links, exactly 2 links renders', () => {
        render(<LinksContainer links={links} setLinks={setLinks}/>)
        const allLinks = screen.getAllByTestId('link')
        expect(allLinks.length).toEqual(2)
    })
})