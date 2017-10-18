'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/buttons'

const MarkdownEditorHeader = ({ handleCreate, handleRemove, isSaving, value }) => (
  <header className='editor-header'>
    <p className='save-message' style={{ color: !isSaving ? 'lightgreen' : 'lightgray' }}>
      {isSaving ? 'Salving' : value === '' ? value : 'Salved!'}
    </p>
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
  isSaving: PropTypes.bool.isRequired,
  value: PropTypes.string
}

export default MarkdownEditorHeader
