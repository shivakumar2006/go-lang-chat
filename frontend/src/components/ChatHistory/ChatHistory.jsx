import React, {Component} from "react";
import Message from "../Message/Message";
import "./ChatHistory.scss";

class ChatHistory extends Component {
    render() {
            console.log(this.props.ChatHistory)
            this.props.ChatHistory(msg => <Message key = {msg.timestamp} message = {msg.data} />)

            return (
                <div className="ChatHistory">
                    <h2>Chat History</h2>
                    {Message}
                </div>
            ) 
    }
}

export default ChatHistory;