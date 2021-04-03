import React from 'react'
import {Button} from 'antd'
import {GithubFilled, LinkedinFilled,MailOutlined } from "@ant-design/icons"

export default function NetworkIcon() {
    return (
        <div >
            <Button href="https://github.com/RaoufDannaoui1" size='large' shape="circle" icon={<GithubFilled />}/>
            <Button href="https://www.linkedin.com/in/abdelraouf-dannaoui/" size='large' shape="circle" icon={<LinkedinFilled />}/>
            <Button href="mailto:dannaoui.abdelraouf@gmail.com" size='large' shape="circle" icon={<MailOutlined />}/>
        </div>
    )
}
