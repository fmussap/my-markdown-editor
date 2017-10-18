'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '/index'

const stories = storiesOf('Button', module)

stories.add('Button success', () => (
  <Button onClick={() => null} cssType='success'>
    Success
  </Button>
))
