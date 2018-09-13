import React from 'react'
import { mount } from 'enzyme'

import App from '../App'

let wrapped

beforeEach(() => {
    // mount() component for Full DOM Rendering to test
    // component API interaction, wrapped HOCs
    wrapped = mount(<App />)
})

afterEach(() => {
    wrapped.unmount()
})

it('renders without crashing', () => {
    expect(wrapped.find('div').length).toBeTruthy
})