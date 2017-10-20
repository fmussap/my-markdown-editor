'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/buttons'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({
  handleCreate,
  handleRemove,
  isSaving,
  value
}) => (
  <header className='editor-header'>
    <input type='text' value={value.title} />
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
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
}

export default MarkdownEditorHeader
