import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Button, Modal } from "../../components";
import { H4, P } from "../../components/typography";

const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

class CustomModalDemo extends Component {
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
          text="Show Custom Modal"
        />
        <Modal open={showModal} onClose={this._callBack} duration={5000}>
          <Content>
            <H4>Here's a nice modal!</H4>
            <H4>With some custom content :)</H4>
          </Content>
        </Modal>
      </Fragment>
    );
  }
}

export default CustomModalDemo;
