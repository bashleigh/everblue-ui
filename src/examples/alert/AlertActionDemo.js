import React, { Component, Fragment } from "react";
import { Button } from "../../components";
import { Alert } from "../../components";

class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showCustomAlert: false,
      showActionAlert: false
    };
    this._callBack = this._callBack.bind(this);
  }

  _callBack() {
    this.setState({
      showActionAlert: false
    });
  }

  render() {
    const { showActionAlert } = this.state;
    return (
      <Fragment>
        <Button
          onClick={() =>
            this.setState({
              showActionAlert: true,
              showAlert: false,
              showCustomAlert: false
            })
          }
          text="Show Alert w/ Action"
        />
        <Alert
          open={showActionAlert}
          action={
            <Button
              uppercase
              margin="5px 0 0 0"
              text="Got it"
              onClick={this._callBack}
              size="sm"
              hover={false}
            />
          }
          autoClose={false}
          onClose={this._callBack}
          text="Need to add a button? Just use the action prop!"
          duration={3500}
        />
      </Fragment>
    );
  }
}

export default AlertDemo;
