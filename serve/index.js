const express = require('express')
const cookieParser = require('cookie-parser')
const { port } = require('./config')
const router = require('./route')

const app = express()
//不使用签名
app.use(cookieParser())

// 请求响应头设置
app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", allowOrigin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", 'Express');
	if (req.method == 'OPTIONS') {
  	res.sendStatus(200);
	} else {
    next();
	}
});

router(app)

app.listen(port, () => {
  console.log('port', port)
})