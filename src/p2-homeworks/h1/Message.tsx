import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props:MessageDataType) {
    return (
        <div>
            <img className={s.avatar} src={props.avatar}></img>
            <div>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;

// avatar:string, name: string, message: string, time: string
