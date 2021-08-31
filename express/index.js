const express = require('express');
const app = express();
const port = process.env.PORT;

app.set('trust proxy', true);

app.get('/', (req, res) => {
  var json = {
	  host: req.hostname,
	  ip: req.ips,
	  header: req.rawHeaders,
	  body: req.body,
	  protocol: req.protocol,
	  cookies: req.cookies,
	  res: res.rawHeaders,
  };
  res.cookie('testCookie', 'testCookieValue', { maxAge: 900000, httpOnly: true });
  res.send(json);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
