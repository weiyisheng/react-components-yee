import React from 'react'
import ReactDOM from 'react-dom'

import FadeAlertComponent from './FadeAlert'
import TipsComponent from './Tips'

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

export const Modal = require('./Modal')
export const Enhances = require('./enhances')
export const Card = require('./Card')
export const List = require('./List')
export const Drawer = require('./Drawer')
