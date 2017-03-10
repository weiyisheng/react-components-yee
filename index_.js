import React from 'react'
import ReactDOM from 'react-dom'

import FadeAlertComponent from './src/FadeAlert'
import TipsComponent from './src/Tips'
import ModalComponent from './src/Modal'

//info, warning, error : string text to show (different icon maybe)
//buttons: {cancel: {label: "cancel", onClick: () => {}}, confirm: {...}, danger: {...}}
export function fadeAlert({info, warning, error, buttons}) {
  const containerId = "fadeAlertContainer" + Date.now()
  var p = document.getElementById(containerId)
  if(!p) {
    var p = document.createElement('div')
    p.id = containerId
    document.body.appendChild(p)
    ReactDOM.render(
      <FadeAlertComponent
        containerId={containerId}
        info={info}
        warning={warning}
        error={error}
        buttons={buttons} />,
      p
    )
  }
}

//info, warning, error : string text to show (different styles)
//duration : millisecond (default: 1800)
export function tips({info, warning, error, duration, onDisappear}) {
  const containerId = "tipsContainer" + Date.now()
  var p = document.getElementById(containerId)
  if(!p) {
    var p = document.createElement('div')
    p.id = containerId
    document.body.appendChild(p)

    ReactDOM.render(
      <TipsComponent
        containerId={containerId}
        info={info}
        warning={warning}
        error={error}
        duration={duration}
        onDisappear={onDisappear} />,
      p
    )
  }
}

export const Modal = ModalComponent
