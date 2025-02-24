

const socket = new WebSocket("ws://localhost:8081");

socket.onopen = () => {
    console.log("Socket opened");
}