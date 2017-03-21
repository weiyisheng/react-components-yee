require('../styles/card.less')

import React from 'react'

class Card extends React.Component {

  render() {
    const { className } = this.props
    return (
      <div {...this.props} className={className ? "card-box " + className : "card-box"}>
        { this.props.children }
      </div>
    )
  }
}

export default Card
