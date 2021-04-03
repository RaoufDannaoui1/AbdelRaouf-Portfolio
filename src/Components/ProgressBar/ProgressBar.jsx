import React from 'react'
import { Progress } from 'antd'
import './ProgressBar.css'
export default function ProgressBar({amount}) {
    return (
        <div>
            <Progress percent={amount} status="active" />
        </div>
    )
}
