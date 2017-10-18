'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './header'

const MarkdownEditor = ({
  getMarkup,
  handleChange,
  textareaRef,
  value,
  ...props
}) => (
  <section className='editor'>
    <MarkdownEditorHeader {...props} value={value} />
    <textarea
      value={value}
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
