'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ children, cssType, onClick }) => (
  <button onClick={onClick} className={`button ${cssType ? '-' + cssType : ''}`}>
    {children}
  </button>
)

Button.prototypes = {
  children: PropTypes.node.isRequired,
  cssType: PropTypes.oneOf(['success', 'danger']),
  onClick: PropTypes.func.isRequired

}
export default Button
