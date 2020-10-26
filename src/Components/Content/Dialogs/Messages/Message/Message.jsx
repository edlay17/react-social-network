import React from "react"
import s from "./Message.module.css"

function Message(props) {
    if(props.inbox){
            return (
                <div>
                    <div className={s.itemFrom}>
                        {props.message}
                    </div>
                </div>
        );
    }
    else{
        return (
            <div className={s.alignRight}>
                <div className={s.itemTo}>
                    {props.message}
                </div>
            </div>
        );
    }
}

export default Message;
