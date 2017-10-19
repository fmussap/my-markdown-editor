'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving, value }) => (
  <p className='save-message' style={{ color: !isSaving ? 'lightgreen' : 'lightgray' }}>
    {isSaving ? 'Salving' : value === '' ? value : 'Salved!'}
  </p>
)

SaveMessage.proptypes = {
  isSaving: PropTypes.bool.isRequired,
  value: PropTypes.string
}

export default SaveMessage
