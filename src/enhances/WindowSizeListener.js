/**
 * Created by germini on 11/26/15.
 */
import React from 'react'

export default ComponsedComponent => class extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(e) {

    this.setState({
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return <ComponsedComponent {...this.props} {...this.state} />
  }

}
