import React, { Component, Fragment } from 'react'
import { Button, Modal } from '../../components'

class ModalDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this._callBack = this._callBack.bind(this)
  }

  _callBack() {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { showModal } = this.state
    return (
      <Fragment>
        <Button
          onClick={() =>
            this.setState({
              showModal: true
            })
          }
          text="Show Default Modal"
        />
        <Modal heading="This is the default modal" open={showModal} onClose={this._callBack} />
      </Fragment>
    )
  }
}

export default ModalDemo
