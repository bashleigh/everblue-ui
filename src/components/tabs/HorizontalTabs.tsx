import React, { Component } from 'react'
import { Box } from '../'

class HorizontalTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      initialIndex: props.initialIndex || 0
    }
  }
  render() {
    return <div />
  }
}

export default HorizontalTabs
