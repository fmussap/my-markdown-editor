'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/buttons'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({
  handleChange,
  handleCreate,
  handleRemove,
  isSaving,
  title,
  value
}) => (
  <header className='editor-header'>
    <input
      type='text'
      value={title}
      placeholder='enter title'
      onChange={handleChange('title')}
    />
    <SaveMessage isSaving={isSaving} value={value} />
    <Button onClick={handleCreate} cssType='success'>
      New
    </Button>
    <Button onClick={handleRemove} cssType='danger'>
      Remove
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default MarkdownEditorHeader
