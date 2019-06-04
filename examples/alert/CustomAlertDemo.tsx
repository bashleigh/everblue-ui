import React, { Component, Fragment } from 'react'
import { Button } from '../../components'
import { Alert } from '../../components'
import { Colors } from '../../theme'
import { CheckCircle } from 'react-feather'

class AlertDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      showCustomAlert: false,
      showActionAlert: false
    }
    this._callBack = this._callBack.bind(this)
  }

  _callBack() {
    this.setState({
      showAlert: false,
      showActionAlert: false,
      showCustomAlert: false
    })
  }

  render() {
    const { showCustomAlert } = this.state
    return (
      <Fragment>
        <Button
          bg={Colors.success}
          onClick={() =>
            this.setState({
              showCustomAlert: true
            })
          }
          text="Show Custom Alert"
        />
        <Alert
          open={showCustomAlert}
          onClose={this._callBack}
          icon={<CheckCircle size={20} style={{ marginRight: 10 }} color="#FFF" />}
          text="Here's a custom alert!"
          bg={Colors.success}
          duration={3500}
        />
      </Fragment>
    )
  }
}

export default AlertDemo
