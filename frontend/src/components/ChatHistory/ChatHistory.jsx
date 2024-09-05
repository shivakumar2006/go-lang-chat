import React, {Component} from "react";
import Message from "../Message/Message";
import "./ChatHistory.scss";

class ChatHistory extends Component {
    render() {
            console.log(this.props.ChatHistory);
            this.props.chatHistory.map(msg=><Message key={msg.timeStamp} message={msg.data} />)

            return (
                <div className="ChatHistory">
                    <h2>Chat History</h2>
                    {Message}
                </div>
            ) 
    }
}

export default ChatHistory;