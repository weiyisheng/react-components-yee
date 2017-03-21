require('../styles/drawer.less')

import React from 'react'

class Drawer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      open: false
    }
  }

  componentDidMount() {
    if(this.props.visible) {
      this.openAnimation()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.visible && !nextProps.visible) {
      this.closeAnimation()
    }

    if(!this.props.visible && nextProps.visible) {
      this.openAnimation()
    }
  }

  openAnimation() {
    this.setState({
      visible: true
    }, () => {
      setTimeout(() => {
        this.setState({
          open: true
        })
      }, 100)
    })
  }

  closeAnimation() {
    this.setState({
      open: false
    }, () => {
      setTimeout(() => {
        this.setState({
          visible: false
        })
      }, 350)
    })
  }

  render() {
    const { direction, close, className, style } = this.props
    const { visible, open } = this.state

    return visible ? (
      <div className={"absolute drawer-cot " + (open ? "drawer-cot-open" : "")}>
        <span className="absolute drawer-back"
          onClick={() => close()}>
        </span>

        <div
          style={style}
          className={"absolute drawer-box " + ("drawer-box-" + direction) + " " + className}>
          { this.props.children }
        </div>
      </div>
    ) : null
  }
}

Drawer.propTypes = {
  direction: React.PropTypes.string,
  visible: React.PropTypes.bool.isRequired,
  close: React.PropTypes.func.isRequired
}

Drawer.defaultProps = {
  direction: "top"
}

export default Drawer
