'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'

import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with value === \'\' ', () => (
  <SaveMessage value={''} />
))

stories.add('SaveMessage with isSaving === Salving ', () => (
  <SaveMessage isSaving />
))

stories.add('SaveMessage with isSaving === null and value !== \'\' ', () => (
  <SaveMessage value={'any'} />
))
