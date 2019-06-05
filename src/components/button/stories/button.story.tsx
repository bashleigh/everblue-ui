import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../../'
import { Colors } from '../../theme'
import { Home } from 'react-feather'

storiesOf('Button', module)
  .add('Standard Button', () => <Button text="Standard Button" />)
  .add('Minimal', () => <Button color={Colors.blue} minimal={true} text="Minimal Button" />)
  .add('Outline Button', () => <Button color={Colors.blue} outline={true} text="Outline Button" />)
  .add('Icon Left', () => <Button icon={<Home color="white" size={16} />} text="Icon Left" />)
  .add('Icon Right', () => (
    <Button iconPos="right" icon={<Home color="white" size={16} />} text="Icon Right" />
  ))
