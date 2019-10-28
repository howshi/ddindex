let Koa = require("koa");
let server = new Koa();
server.listen(3000,err=>{
	console.log("后端服务器已监听3000端口，如果有人向3000端口发请求，服务器就会做出响应")
})

let Static = require("koa-static")
server.use(Static("./src"))
let cors = require("koa2-cors")
server.use(cors())
let body = require("koa-body")
server.use(body())
let multer = require("koa-multer")
let {admin,user,goods,shopcar}=require("./mongo")
let Router = require("koa-router")
let router = new Router();
server.use(router.routes())