'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './markdown-editor-header'

const MarkdownEditor = ({
  value,
  isSaving,
  handleChange,
  getMarkup,
  handleRemove
}) => (
  <section className='editor'>
    <MarkdownEditorHeader isSaving={isSaving} handleRemove={handleRemove} />
    <textarea
      value={value}
      onChange={handleChange}
      autoFocus
    />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.prototypes = {
  handleRemove: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default MarkdownEditor
