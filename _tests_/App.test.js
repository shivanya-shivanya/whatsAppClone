import 'react-native'
import React from 'react'
import App from '../App'

import renderer from 'react-testr-renderer';

test('test render snapshot',() => {
    const snapshot = renderer.create(<App/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})