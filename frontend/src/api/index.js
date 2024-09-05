var socket = new WebSocket("ws://localhost:9000/ws");

let connect = (cb) => {
    console.log("connectiong...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    }

    socket.onmessage = (msg) => {
        console.log("message from websocket", msg);
    }

    socket.onclose = (event) => {
        console.log("socket closesd connection", event);
    }

    socket.onerror = (error) => {
        console.log("socket error", error);
    }
}

let sendMsg = (msg) => {
    console.log("sending messages", msg);
    socket.send(msg);
}

export {connect, sendMsg};