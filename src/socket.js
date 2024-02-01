import io from "socket.io-client"; // Add this

let socket;

const connectSocket = (user_id) => {
  // socket = io("http://10.13.1.24:4000", {
  //   query: `user_id=${user_id}`,
  // });
  socket = io("http://localhost:4000", {
    query: `user_id=${user_id}`,
  });
};

export { socket, connectSocket };
