var express = require('express')
var app = express()//d等价于http.createServe()
/*app.use(express.static('./public/'))//公开public里的文件，访问路径时可以少些public*/
app.use('/public/',express.static('./../../public/'))//前面有'./public/'就必须早访问路径写上前面的
app.get('/login',function (req,res) {
    res.send(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			.d{
				width:400px;
				height:200px;
				border: 1px solid red;
			}
			</style>
	</head>
	<body>
		<div class="d"><img src="../assets/r61.jpg" style="width:400px;height:200px"></div>
		<p>nieasds2131</p>
	</body>
</html>
`)
})
app.listen(3000),function () {
    console.log('app is running at port3000')
}
