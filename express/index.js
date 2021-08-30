const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  var json = {
	  host: req.hostname,
	  ip: req.ips,
	  header: req.rawHeaders,
	  body: req.body,
	  cookies: req.cookies,
  };
  res.send(json);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
