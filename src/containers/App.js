import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getFilms } from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page, getFilmsAction } = this.props
    return (
      <div className="app">
        <User names={user.names} />
        <Page
          name={page.name}
          films={page.films}
          isFetching={page.isFetching}
          getFilms={getFilmsAction}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFilmsAction: name => dispatch(getFilms(name)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
