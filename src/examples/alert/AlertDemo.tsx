import React, { Component, Fragment } from 'react'
import { Button } from '../../components'
import { Alert } from '../../components'

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
      showAlert: false
    })
  }

  render() {
    const { showAlert } = this.state
    return (
      <Fragment>
        <Button
          onClick={() =>
            this.setState({
              showAlert: true,
              showActionAlert: false,
              showCustomAlert: false
            })
          }
          text="Show Alert"
        />
        <Alert open={showAlert} onClose={this._callBack} duration={5000} />
      </Fragment>
    )
  }
}

export default AlertDemo
