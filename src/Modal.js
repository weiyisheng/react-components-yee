require('../styles/modal.less')

import React from 'react'
import Portal from './Portal'

class Modal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        open: true
      })
    })
  }

  close() {
    const { close } = this.props
    this.setState({
      open: false
    })

    setTimeout(() => {
      close()
    }, 300)
  }

  getStartPosition(startPosition) {
    const windowSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    //console.log(" windowSize : ", windowSize, ", startPosition : ", startPosition);
    return startPosition ? {
      left: startPosition.left - windowSize.w / 2,
      top:  startPosition.top - windowSize.h / 2
    } : {
      left: 0,
      top: 0
    }
  }

  render() {
    const { close, startPosition } = this.props
    const { open } = this.state
    const { left, top } = this.getStartPosition(startPosition)

    return (
      <Portal
        portalId={"modal_" + Date.now()}
        className={open ? "layout content-cot modal-cot modal-cot-visible"
          : "layout content-cot modal-cot modal-cot-hidden"}>
        <span
          className="background"
          onClick={() => this.close()}>
        </span>

        <div className="content-box"
          style={{
            transform: open ? `translate(0,0) scale(1)`
              : `translate(${left}px,${top}px) scale(0.1)`,
            WebkitTransform: open ? `translate(0,0) scale(1)`
              : `translate(${left}px,${top}px) scale(0.1)`,
          }}>
          { this.props.children }
        </div>
      </Portal>
    )
  }
}

class ModalContainer extends React.Component {

  render() {
    const { visible } = this.props

    return visible ? <Modal {...this.props}/> : null
  }
}

export default ModalContainer
