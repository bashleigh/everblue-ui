import React, { Fragment } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Button, Modal } from '../../'
import { Colors } from '../../theme'
import { ModalDemo, CustomModalDemo, WithActionsDemo } from '../../../../examples/modal'

const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`

const Actions = (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Button
      margin="0 10px 0 0"
      uppercase={true}
      outline={true}
      size="small"
      color={Colors.blue}
      text="Undo"
    />
    <Button uppercase={true} size="sm" text="Submit" />
  </div>
)

storiesOf('Modal', module)
  .add('Standard Modal', () => <Modal heading="This is the default modal" open={true} />)
  .add('Custom Content', () => (
    <Modal open={true}>
      <Content>
        <p>Here's a nice modal!</p>
        <p>With some custom content :)</p>
      </Content>
    </Modal>
  ))
  .add('With Actions', () => <Modal heading="A modal with actions" open={true} actions={Actions} />)
