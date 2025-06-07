const net = require("net");       // loads Node.js’s built-in net module, lets us create raw TCP servers

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this to pass the first stage
 const server = net.createServer((socket) => {   // now we create a TCP server from this line
socket.on("data", (data) => {          // incoming http req
    const request = data.toString();    // req converted from binary to string for readablity
    const lines = request.split("\r\n");  // splits the request into lines using CRLF (the \r\n thingy) 
    const requestLine = lines[0];          // gets the very first line of code
    const [method, path] = requestLine.split(" ");     // splits parts of the req into seperat chunks, strings

    let response;
    if (path === "/") {
      response =
        "HTTP/1.1 200 OK\r\n\r\n<html><body><h1>Hello World</h1></body></html>";
    } else {
      response = "HTTP/1.1 404 Not Found\r\n\r\n";
    }

    socket.write(response);   // sends res back to client, peace ah
    socket.end();
  });

  socket.on("close", () => {    // makes sure the socket is closed if not already, we gotta be extra sure
    socket.end();
   });
 });

 server.listen(4221, "localhost");
 console.log("Server is listening on port 4221");
