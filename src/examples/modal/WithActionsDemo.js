import React, { Component, Fragment } from "react";
import { Button, Modal } from "../../components";
import { Colors } from "../../themes";

const Actions = (
  <Fragment>
    <Button
      margin="0 10px 0 0"
      uppercase
      outline
      size="small"
      color={Colors.blue}
      text="Undo"
    />
    <Button uppercase size="small" text="Submit" />
  </Fragment>
);

class WithActionsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this._callBack = this._callBack.bind(this);
  }

  _callBack() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <Fragment>
        <Button
          onClick={() =>
            this.setState({
              showModal: true
            })
          }
          text="Show Modal with Actions"
        />
        <Modal
          heading="A modal with actions"
          open={showModal}
          actions={Actions}
        />
      </Fragment>
    );
  }
}

export default WithActionsDemo;
