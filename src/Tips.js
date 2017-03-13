import React from 'react'
import { Motion, spring } from 'react-motion'

const BackgroundColor = {
  warning: "#FBD50D",
  error: "#F72929",
  info: "#3c8dbc",
}

const DefaultDuration = 200

const DefaultDepth = 6

class Tips extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  onRest() {
    const { duration, onDisappear } = this.props
    const { visible } = this.state

    if(visible) {
      setTimeout(() => {
        this.setState({visible: false})
      }, duration || DefaultDuration)
    } else {
      const element = document.getElementById(this.props.containerId)
      element ? document.body.removeChild(element) : void 0
      if(onDisappear) {
        onDisappear()
      }
    }
  }

  render() {
    const { info, warning, error, duration } = this.props
    const { visible } = this.state

    return (
      <Motion style={{opacity: spring(visible ? 1 : 0, {stiffness: 210, damping: 20})}}
        onRest={() => this.onRest()}>
      {
        ({opacity}) =>
          <div style={{...styles.cot, zIndex: 800, opacity}}>
            <div className={"depth-" + DefaultDepth} style={{...styles.alertBox,
                backgroundColor:  error ? BackgroundColor.error : warning ? BackgroundColor.warning : BackgroundColor.info}}>
              <p style={{...styles.alertText, color: warning ? "#505050" : "#ffffff"}}>
                {error || warning || info}
              </p>
            </div>
          </div>
      }
      </Motion>
    )
  }
}

export default Tips

const styles = {
  cot: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    // zIndex: 1060, //example-modal 的index 是 1050
    textAlign: "center"
  },
  alertBox: {
    minWidth: 288,
    maxWidth: 568,
    height: 48,
    margin: "auto",
    borderRadius: "2px"
  },
  alertText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: "48px",
    fontWeight: "500"
  }
}
