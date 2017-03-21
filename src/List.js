import React from 'react'

import { TransitionMotion, spring, presets } from 'react-motion'

class List extends React.Component {

  willEnter() {
    return {
      height: 0,
      opacity: 1
    }
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0)
    }
  }

  getDefaultStyles() {
    const { rows, rowKey } = this.props
    return rows.map(row => ({data: {row}, key: row[rowKey], style: {height: 0, opacity: 1}}))
  }

  getStyles() {
    const { rows, rowHeight, rowKey } = this.props
    return rows.map(row => ({data: {row}, key: row[rowKey], style: {height: spring(rowHeight, presets.gentle), opacity: spring(1, presets.gentle)}}))
  }

  render() {
    const { rows, renderRow, style, className, rowKey } = this.props

    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        willEnter={() => this.willEnter()}
        willLeave={() => this.willLeave()}
        styles={this.getStyles()}>
        {
          interpolatedStyles => (
            <div style={{...styles.cot, ...style}} className={className}>
              {
                interpolatedStyles.map(({data, key, style}) => {
                  return (
                    <div key={key} style={{...styles.rowBox, ...style}}>{renderRow(data.row)}</div>
                  )
                })
              }
            </div>
          )
        }
      </TransitionMotion>
    )
  }
}

List.propTypes = {
  rows: React.PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired,
  rowHeight: React.PropTypes.number.isRequired,
  rowKey: React.PropTypes.string
}

List.defaultProps = {
  rowKey: "id"
}

export default List

const styles = {
  cot: {

  },
  rowBox: {

  }
}
