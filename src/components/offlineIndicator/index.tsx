import React, { Component } from 'react'
// @ts-ignore
import Offline from 'react-offline'
import styled from 'styled-components'

const OfflineStyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  background-color: red;
  color: white;
`

type Props = {
  text: string
}

export const OfflineIndicator: React.FC<Props> = ({ text }) => (
  <Offline>
    {({ isOffline }: any) => {
      return isOffline ? (
        <OfflineStyleWrapper>{text || 'You are offline'}</OfflineStyleWrapper>
      ) : null
    }}
  </Offline>
)
