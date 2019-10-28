let mongo = require("mongoose");
// mongod --dbpath=C:data/xx/
mongo.connect("mongodb://127.0.0.1/xiaoniu02",{useUnifiedTopology: true,useNewUrlParser:true})
mongo.connection.on("connected",err=>{
	console.log("连接成功")
})