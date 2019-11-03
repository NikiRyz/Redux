import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  render() {
    const { names } = this.props
    return (
      <div>
        <p>Привет, {names}!</p>
      </div>
    )
  }
}

User.propTypes = {
  names: PropTypes.string.isRequired,
}
