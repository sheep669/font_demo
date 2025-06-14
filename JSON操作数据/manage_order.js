const fs = require('fs');

let orders = [];
//setTimeout 添加延时
// 1.异步读取JSON文件内容
setTimeout(() => {
	console.log('异步读取JSON ');
	fs.readFile('./order.json', 'utf-8', (err, data) => {
		orders = JSON.parse(data)
		console.log(orders);
	})
}, 10)

// 2）同步读取JSON内容
setTimeout(() => {
	console.log('同步读取JSON ');
	orders = fs.readFileSync('./order.json', 'utf-8');
	console.log(orders);
}, 20)

// 写JSON 
// 2.添加数据
// let goods = {
// 	"gId": "003",
// 	"goodName": "矿泉水",
// 	"gPrice": 2
// };
//将上面的数据写入到order.json文件中。
// setTimeout(() => {
// 	console.log('向JSON文件中添加数据');

// 	function addOrder(goods) {
// 		// 现将json文件读出来
// 		fs.readFile('./order.json', function(err, data) {
// 			if (err) throw err;
// 			var order = data.toString(); // 将二进制的数据转换为字符串
// 			order = JSON.parse(order); // 将字符串转换为json对象
// 			order.push(goods); // 将传来的对象push进数组对象中
// 			var str = JSON.stringify(order); // 因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
// 			fs.writeFile('./order.json', str, function(err) {
// 				if (err) throw err;
// 				console.log('新增成功');
// 			})
// 		})
// 	}
// 	addOrder(goods) // 调用函数;
// }, 30)

// 改JSON 
// 3.修改数据
// 将gId为002的商品的名称改为"联想笔记本电脑"。
// setTimeout(() => {
// 	console.log('修改JSON文件中的数据');
// 	var params = {
// 		"goodName": "联想笔记本电脑"
// 	}

// 	function changeJson(id, params) {
// 		fs.readFile('./order.json', function(err, data) {
// 			if (err) throw err;
// 			var order = data.toString();
// 			order = JSON.parse(order);
// 			// 把数据读出来,然后进行修改
// 			for (var i = 0; i < order.length; i++) {
// 				if (id == order[i].gId) {
// 					for (var key in params) {
// 						if (order[i][key]) {
// 							order[i][key] = params[key];
// 						}
// 					}
// 				}
// 			}
// 			var str = JSON.stringify(order);
// 			fs.writeFile('./order.json', str, function(err) {
// 				if (err) throw err;
// 				console.log('修改成功');
// 			})
// 		})
// 	}

// 	changeJson('002', params);
// }, 40)

// 删JSON 
// 4.删除数据
//按指定gId删除json文件中指定的数据。
setTimeout(() => {
	console.log('删除JSON文件中指定的数据');

	function deleteJson(id) {
		fs.readFile('./order.json', function(err, data) {
			if (err) throw err;
			var order = data.toString();
			order = JSON.parse(order);
			// 把数据读出来删除
			for (var i = 0; i < order.length; i++) {
				if (id == order[i].gId) {
					order.splice(i, 1);
				}
			}
			var str = JSON.stringify(order);
			// 再把数据写进去
			fs.writeFile('./order.json', str, function(err) {
				if (err) throw err;
				console.log("删除成功");
			})
		})
	}

	deleteJson('003');
}, 50)