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
    this.state = {
      files: [],
      id: v4(),
      isSaving: false,
      value: {
        title: '',
        content: ''
      }
    }

    this.getFiles = () => (
      Object.keys(localStorage)
    )

    this.getMarkup = () => {
      return { __html: marked(this.state.value.content) }
    }

    this.handleChange = (e) => {
      this.setState({
        value: {content: e.target.value},
        isSaving: true
      })
    }

    this.handleCreate = () => {
      this.setState({
        id: v4(),
        value: {
          title: '',
          content: ''
        }
      })
      this.textarea.focus()
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        id: fileId,
        value: JSON.parse(localStorage.getItem(fileId))
      })
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.setState({ files: this.getFiles() })
      this.handleCreate()
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, JSON.stringify({
          title: 'sem title',
          content: this.state.value.content
        }))
        this.setState({
          isSaving: false
        })
        this.setState({ files: this.getFiles() })
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
    let files = this.getFiles()
    files = files.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/))
    files && this.setState({ files })
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
        value={this.state.value}
      />
    )
  }
}
