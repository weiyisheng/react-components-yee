import React from 'react'
import { Motion, spring } from 'react-motion'

const TextColor = {
  danger: "#D00202",
  confirm: "#3c8dbc",
  cancel: "#909090"
}

const AlertWidth = 380

class FadeAlert extends React.Component {

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
    //$("body").css("overflow", "hidden")
    document.body.style.overflow = "hidden"
  }

  onRest() {
    const { duration } = this.props
    const { visible } = this.state

    if(!visible) {
      const element = document.getElementById(this.props.containerId)
      element ? document.body.removeChild(element) : void 0
    }
  }

  fadeOut() {
    this.setState({
      visible: false
    })
    document.body.style.overflow = "auto"
  }

  render() {
    const { info, warning, error, buttons } = this.props
    const { visible } = this.state

    return (
      <Motion style={{opacity: spring(visible ? 1 : 0, {stiffness: 210, damping: 20})}}
        onRest={() => this.onRest()}>
      {
        ({opacity}) =>
          <div style={{...styles.cot, opacity}}>
            <div style={styles.backdrop}>
              <div style={styles.alertTop}/>
              <div style={{...styles.alertBox}}>
                <div style={styles.infoBox}>
                  <p style={styles.info}>
                    {
                      //考虑增加不同的icon 以区分不同的内容
                    }
                    {error || warning || info}
                  </p>
                </div>

                <div style={styles.buttonBox}>
                  {
                    (buttons || []).map(button => {
                      const { type, label, onClick } = button
                      return (
                        <div key={label}
                          style={{...styles.button, width: AlertWidth / buttons.length}}
                          onClick={() => {this.fadeOut(); onClick && onClick()}}>
                          <p style={{
                              ...styles.buttonText,
                              color: type === "danger" ? TextColor.danger :
                                type === "confirm" ? TextColor.confirm :
                                type === "cancel" ? TextColor.cancel :
                                TextColor.cancel }}>
                            {label}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
      }
      </Motion>
    )
  }
}

export default FadeAlert

const styles = {
  cot: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10000,
    textAlign: "center"
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, .2)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  alertTop: {
    height: 180,
    width: 1
  },
  alertBox: {
    width: AlertWidth,
    margin: "auto",
    backgroundColor: "#fff",
    boxShadow: "0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12)"
  },
  infoBox: {
    width: AlertWidth,
    minHeight: 130,
    textAlign: "center",
    padding: "5% 10px"
  },
  info: {
    textAlign: "center",
    fontSize: 15,
    padding: "10% 0px"
  },
  buttonBox: {
    borderTop: "1px solid #dcdcdc",
    overflow: "hidden"
  },
  button: {
    height: 42,
    cursor: "pointer",
    float: "left",
    borderRight: "1px solid #dcdcdc"
  },
  buttonText: {
    fontSize: 15,
    lineHeight: "42px",
    fontWeight: "500"
  }
}
