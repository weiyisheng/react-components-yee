/**
 * Created by germini on 11/26/15.
 */
import React from 'react'
import { Validation } from 'react-utils-yee'

export default ComponsedComponent => class extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      valueError: false,
      focus: false
    }
  }

  onFocus() {
    const { onFocus } = this.props

    this.setState({
      valueError: false,
      focus: true
    })

    if(onFocus) {
      onFocus()
    }
  }

  //check value according to type and condition
  onBlur() {
    const { onBlur, value, required, type, validation } = this.props
  //  console.log(" value : ", value);

    this.setState({
      focus: false
    })

    //首先进行必须检查
    if(required && !Validation.notEmptyString(value)) {
      this.setState({ valueError: true})
    }

    //通过了必须检查 以下的所有检查均是在存在value 的情况下进行
    if(value) {
      if(type === "phoneNumber" && !Validation.validPhoneNumber(value)) {
        this.setState({ valueError: true })
      }

      if(validation && !validation(value)) {
        this.setState({ valueError: true })
      }
    }

    if(onBlur) {
      onBlur()
    }
  }

  render() {
    return <ComponsedComponent
            {...this.props}
            {...this.state}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}/>
  }

}
