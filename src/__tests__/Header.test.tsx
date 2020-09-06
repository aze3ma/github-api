import React from 'react'

import { render } from '@testing-library/react'

import Header from '../components/Header'

describe('Header.tsx', () => {
    it('should render correctly', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
    })
})
