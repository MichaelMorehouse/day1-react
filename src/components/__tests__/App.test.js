import React from 'react'
import { mount } from 'enzyme'

import App from '../App'

// let wrapped

// beforeEach(() => {
//     wrapped = mount(<App />)
// })

// afterEach(() => {
//     wrapped.unmount()
// })

it('renders without crashing', () => {
    const wrapped = mount(<App />)
    expect(wrapped.find('div').length).toBeTruthy
})