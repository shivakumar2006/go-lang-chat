var socket = new WebSocket("ws://localhost:9000/ws");

let connect = (cb) => {
    console.log("connecting");

    socket.onOpen = () => {
        console.log("successfully connected");
    }

    socket.onMessage = (msg) => {
        console.log("message from websocket : ", msg);
    }

    socket.onClose = (event) => {
        console.log("socket closed connection : ", event);
    }

    socket.onerror = (error) => {
        console.log("socket error : ", error);
    }
}

let sendMsg = (msg) => {
    console.log("sending message : ", msg);
    socket.send(msg);
}

export {connect, sendMsg};