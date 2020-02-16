import React, { Component } from "react";
import { Button, Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">lalalal</Menu.Item>
    <Menu.Item key="2">mamamama</Menu.Item>
    <Menu.Item key="3">jijijijji</Menu.Item>
  </Menu>
);

function onClick(e) {
  console.log(e);
}

export default class MulBotton extends Component {
  render() {
    return (
      <>
        <div>
          <Button type="primary">primary</Button>
          <Button>second</Button>
          <Dropdown overlay={menu}>
            <Button>
              action
              <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </>
    );
  }
}
