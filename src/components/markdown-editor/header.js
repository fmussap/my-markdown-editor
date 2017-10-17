'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className='editor-header'>
    <p className='save-message' style={{ color: !isSaving ? 'lightgreen' : 'lightgray' }}>
      {isSaving ? 'Salving' : 'Salved!'}
    </p>
    <button onClick={handleCreate} className='button-create'>New</button>
    <button onClick={handleRemove} className='button-remove'>Remove</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
