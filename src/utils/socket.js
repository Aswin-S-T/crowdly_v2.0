import { io } from "socket.io-client";
const socket = io.connect("http://192.168.43.229:5000");
export default socket;