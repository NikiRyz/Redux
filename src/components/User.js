import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  render() {
    const { names } = this.props
    return (
      <div>
        <h3>Привет, {names}!</h3>
      </div>
    )
  }
}

User.propTypes = {
  names: PropTypes.string.isRequired,
}
