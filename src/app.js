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
      value: '',
      id: v4(),
      isSaving: false
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.handleCreate = () => {
      this.setState({
        id: v4(),
        value: ''
      })
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.handleCreate()
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({
          isSaving: false
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

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        getMarkup={this.getMarkup}
        handleChange={this.handleChange}
        handleCreate={this.handleCreate}
        handleRemove={this.handleRemove}
        isSaving={this.state.isSaving}
        textareaRef={this.textareaRef}
        value={this.state.value}
      />
    )
  }
}
