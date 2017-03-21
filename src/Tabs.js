require('../styles/tabs.less')

import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export class TabContent extends React.Component {

  render() {
    const { index, currentIndex } = this.props

    return (
      <div className={"tabs-content "
        + (currentIndex === index ? "active"
            : (currentIndex > index) ? "content-left" : "content-right")}>
        { this.props.children }
      </div>
    )
  }
}

class Tabs extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  renderNav() {
    const { children } = this.props

    return children ? (
      <div className="tabs-nav-box">
        {
          children.map((child, index) => {
            const active = this.state.currentIndex === index
            return (
              <FlatButton
                key={child.props.label}
                style={{
                  height: 56,
                  color: active ? "rgb(45,50,62)" : "rgba(0,0,0,0.54)"
                }}
                label={child.props.label}
                onClick={() => this.setState({currentIndex: index})}/>
            )
          })
        }
      </div>
    ) : null
  }

  render() {

    return (
      <div className="tabs-cot">
        { this.renderNav() }
        <div className="tabs-content-box">
          {
            React.Children.map(
              this.props.children,
              (child, index) => React.cloneElement(child, { index, currentIndex: this.state.currentIndex })
            )
          }
        </div>
      </div>
    )
  }
}

export default Tabs
