'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div style={{ display: 'flex', height: 40 }}>
    {story()}
  </div>
))

stories.add('Button default', () => (
  <Button onClick={action('success')}>
    Default button
  </Button>
))

stories.add('Button success', () => (
  <Button onClick={action('success')} cssType='success'>
    Success
  </Button>
))

stories.add('Button remove', () => (
  <Button onClick={action('removed')} cssType='danger'>
    Remove
  </Button>
))
