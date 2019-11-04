import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const index = +e.currentTarget.innerText
    console.log(index)
    this.props.getFilms(index)
  }

  renderTemplate = () => {
    const { isFetching, error } = this.props
    const title = this.props.films['title']
    const description = this.props.films['description']
    if (error) {
      return <p className="error">Во время загрузки данных произошла ошибка</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return (
        <div className="film">
          <h2>{title} </h2>
          <p> {description}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            0
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            1
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2
          </button>{' '}
        </p>

        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  name: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  getFilms: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
