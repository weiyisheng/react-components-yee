import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {

  constructor(props) {
    super(props)
    this.portalElement = null
  }

  render() {
    return null
  }

  componentDidMount() {
    var p = this.props.portalId && document.getElementById(this.props.portalId)
    if(!p) {
      var p = document.createElement('div')
      p.id = this.props.portalId
      document.body.appendChild(p)
    }
    this.portalElement = p
    this.componentDidUpdate()
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement)
  }

  componentDidUpdate() {
    const _props = {...this.props}
    delete _props.portalId
    ReactDOM.render(<div {..._props}>{this.props.children}</div>, this.portalElement)
  }

}
