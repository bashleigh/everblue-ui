import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Alert, Button } from '../../'
import { AlertDemo, AlertActionsDemo, CustomAlertDemo } from '../../../examples/alert'

export const state = {
  open: true,
  text: 'Testing Alert'
}

export const actionState = {
  open: true,
  text: 'Here\'s an alert with an action',
  action: <Button size="sm" text="Got it" />
}

export const actions = {
  onShowAlert: action('onShowAlert')
}

storiesOf('Alert', module)
  .add('With Action', () => <AlertActionsDemo />)
  .add('Custom Alert', () => <CustomAlertDemo />)
  .add('Regular Alert Demo', () => <AlertDemo />)
  .add('Actions Alert Demo', () => <AlertActionsDemo />)
  .add('Custom Alert Demo', () => <CustomAlertDemo />)
