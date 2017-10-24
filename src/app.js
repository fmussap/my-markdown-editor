'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import { v4 } from 'node-uuid'

import MarkdownEditor from 'views/markdown-editor'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

export default class App extends Component {
  constructor () {
    super()
    this.clearState = () => ({
      title: '',
      value: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.handleCreate = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    }

    this.handleRemove = () => {
      if (this.state.files) {
        // eslint-disable-next-line no-unused-vars
        const { [this.state.id]: id, ...files } = this.state.files
        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({ files })
        this.handleCreate()
      }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'no title',
            content: this.state.value
          }
        }

        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({
          isSaving: false,
          files
        })
      }
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor')) || {}
    this.setState({ files })
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        files={this.state.files}
        getMarkup={this.getMarkup}
        handleChange={this.handleChange}
        handleCreate={this.handleCreate}
        handleOpenFile={this.handleOpenFile}
        handleRemove={this.handleRemove}
        isSaving={this.state.isSaving}
        textareaRef={this.textareaRef}
        title={this.state.title}
        value={this.state.value}
      />
    )
  }
}
