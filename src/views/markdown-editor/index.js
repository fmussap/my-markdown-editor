'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './header'
import Files from './files'

const MarkdownEditor = ({
  files,
  getMarkup,
  handleChange,
  handleOpenFile,
  textareaRef,
  value,
  ...props
}) => (
  <section className='editor'>
    <MarkdownEditorHeader {...props} value={value} />
    <Files files={files} handleOpenFile={handleOpenFile} />
    <textarea
      value={value.content}
      onChange={handleChange}
      autoFocus
      ref={textareaRef}
    />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.prototypes = {
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default MarkdownEditor
