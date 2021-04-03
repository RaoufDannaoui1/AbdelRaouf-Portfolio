import React from "react";
import { Menu, Dropdown, Button } from "antd";
import {ColumnHeightOutlined } from "@ant-design/icons"
import "./DropDown.css"
export default function DropDown() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a className="navigation" href="#home">
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="navigation" href="#about">
          About Me
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="navigation" href="#projects">
          Projects
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="navigation" href="#contact">
          Contact Me
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="dropBtn">
      <Dropdown  overlay={menu} placement="bottomCenter" arrow>
        <Button shape="circle" type="primary" size='large' icon={<ColumnHeightOutlined />} ></Button>
      </Dropdown>
    </div>
  );
}
