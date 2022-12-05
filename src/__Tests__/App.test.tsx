import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('Initial test', () => {
    it('App element renders', () => {
        render(<App/>)
        const mainDiv = screen.getByTestId(/main-div/i)
        expect(mainDiv).toBeDefined()
    })
})