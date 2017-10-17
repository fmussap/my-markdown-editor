'use strict'

import React, { Component } from 'react'
import marked from 'marked'

import MarkdownEditor from 'components/markdown-editor'

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
      this.setState({ value: '' })
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem('md')
      this.setState({ value: '' })
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem('md', this.state.value)
        this.setState({
          isSaving: false
        })
      }
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
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
