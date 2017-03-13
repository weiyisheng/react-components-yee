import React from 'react'

import { Validation } from 'react-utils-yee'

class Input extends React.Component {

  error(isError) {
    const { onError } = this.props
    if(onError) {
      onError(isError)
    }
  }

  onFocus() {
    const { onFocus } = this.props
    this.error(false)
    if(onFocus) {
      onFocus()
    }
  }

  //check value according to type and condition
  onBlur() {
    const { onBlur, value, required, type, validation, onError } = this.props

    //首先进行必须检查
    if(required && !Validation.notEmptyString(value)) {
      this.error(true)
      return
    }

    //通过了必须检查 以下的所有检查均是在存在value 的情况下进行
    if(value) {
      if(type === "phoneNumber" && !Validation.validPhoneNumber(value)) {
        this.error(true)
        return
      }

      if(validation && !validation(value)) {
        this.error(true)
        return
      }
    }

    this.error(false)
    if(onBlur) {
      onBlur()
    }
  }

  render() {

    return (
      <input
        {...this.props}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}/>
    )
  }
}

Input.propTypes = {
  required: React.PropTypes.bool,
  validation: React.PropTypes.func,
  onError: React.PropTypes.func
}


export default Input
