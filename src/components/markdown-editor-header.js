'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
  <header className='editor-header'>
    <p className='save-message' style={{ color: !isSaving ? 'lightgreen' : 'lightgray' }}>
      {isSaving ? 'Salving' : 'Salved!'}
    </p>
    <button onClick={handleRemove}>Remove</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
