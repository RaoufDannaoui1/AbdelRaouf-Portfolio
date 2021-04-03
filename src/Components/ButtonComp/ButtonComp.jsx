import React from "react";
import { Button } from "antd";
import './ButtonComp.css'

export default function ButtonComp({ text, type, functionality, link }) {

  return (
    <div>
      <Button className='btnstyle' href={link} onClick={functionality} size="large" type={type}>{text}</Button>
    </div>
  );
}
