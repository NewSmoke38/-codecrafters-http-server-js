const net = require("net"); // ✅ CommonJS — safe
console.log("Logs from your program will appear here!");var N = net.createServer((l) => {
  l.on("data", (b) => {
    const f = b.toString().split("\r\n"),
      [j, i, q] = f[0].split(" ");
    console.log({ method: j, path: i, version: q });

    let w = "HTTP/1.1 404 Not Found\r\n\r\n";
    switch (i) {
      case "/":
        w =
          "HTTP/1.1 200 OK\r\n\r\n<html><body><h1>Hello World</h1></body></html>";
        break;
    }

    l.write(w);
    l.end();
    console.log("messaged");
  });

  l.on("close", () => {
    l.end();
    // N.close(); <-- REMOVE this
  });
});

N.listen(4221, "localhost");