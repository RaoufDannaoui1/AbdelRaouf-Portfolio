import React from "react";
import emailjs from 'emailjs-com';
import { Button, Input } from "antd";
import { UserOutlined, GlobalOutlined, MailOutlined } from "@ant-design/icons";
import "./MailForm.css";
export default function MailForm() {

  function sendEmail(e) {
    e.preventDefault();
    

    emailjs.sendForm('abdelraouf_gmail', 'template_f3wld3s', e.target, 'user_d5DdfEi4UTF4qyHQd7sG1')
      .then((result) => {
        window.alert('Your message has been sent!');
      }, (error) => {
        window.alert('Something went wrong. Try again!');
      });
  }

  const { TextArea } = Input;

  return (
    <div>
     <form onSubmit={sendEmail} >
      <div className="form-info-area">
        <Input name="from_name" size="large" placeholder="Your Name" prefix={<UserOutlined />} allowClear required/>
        <Input type='email' name="reply_to" size="large" placeholder="Your Email" prefix={<GlobalOutlined />} allowClear required/>
       
      </div>
      <div className="form-msg-area">
        <Input name="mail_subjet" size="medium" placeholder="Subject" prefix={<MailOutlined />} allowClear required/>
        <TextArea name="message" rows={4} placeholder="Your Message" allowClear required/>
        <Button type="primary" size="large" htmlType="submit">Send Email</Button>
      </div>
      </form>
    </div>
  );
}
