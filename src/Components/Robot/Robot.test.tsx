import React from 'react'
import { render } from '@testing-library/react'

import Robot from './Robot'

describe('Robot', () => {
  it('renders', () => {
    const { getByTestId } = render(<Robot id="x0y0" />)

    expect(getByTestId('robot')).toBeDefined()
  })
})
