'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './index'

configure({ adapter: new Adapter() })

const noop = () => null

it('Should Button default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop}>
      Click me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} cssType='success'>
      Click me Success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} cssType='danger'>
      Click me Danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Button with prop kind="success" should has class "-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} cssType='success'>
      Button Success
    </Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
  expect(wrapper.hasClass('-danger')).toBe(false)
})

it('Button with prop kind="danger" should has class "-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} cssType='danger'>
      Button Success
    </Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
  expect(wrapper.hasClass('-success')).toBe(false)
})
