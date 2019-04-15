import React, { Component } from 'react'
import Offline from 'react-offline'
import { OfflineStyleWrapper } from './OfflineIndicator'

export default class OfflineIndicator extends Component {
  render() {
    return (
      <Offline>
        {({ isOffline, isOnline }) => {
          return isOffline ? (
            <OfflineStyleWrapper>{this.props.text || 'You are offline'}</OfflineStyleWrapper>
          ) : null
        }}
      </Offline>
    )
  }
}
