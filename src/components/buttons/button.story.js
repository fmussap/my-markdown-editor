'use strict'

import React from 'react'
import { storiesOf, action } from '@storybook/react'

import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div style={{ display: 'flex', height: 40 }}>
    {story()}
  </div>
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
