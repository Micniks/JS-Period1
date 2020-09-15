const http = require("http");
const getSecureRandoms = require("./ex1-crypto-module");

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/securerandoms") {
    res.setHeader("Content-Type", "application/json");

    let randoms = await getSecureRandoms([48, 40, 32, 24, 16, 8, 4, 2]);
    res.write(JSON.stringify(randoms));
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("listening on 3000");
//Register for the "DosDetected" event and console.log the url and time info.
