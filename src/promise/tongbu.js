const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var userData = "first data";
        resolve(userData);
        console.log('ss')
    }, 2000);
}).then(nh => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(nh + "ccc");
            let dh =nh+'ccc'
            resolve(dh);
        }, 1000);
    });
}).then(nh=>{
    setTimeout(() => {
        console.log(nh + "BBB");
    }, 1000);
})

// // 链式调用
// const getUser = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("userData");
// 	}, 2000);
// 	let userData = "";
// 	resolve(userData);
// });

// getUser
// 	.then(data => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				let orderData = "订单数据";
// 				resolve(data + orderData);
// 			}, 2000);
// 		});
// 	})
// 	.then(data => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				let goodsData = "商品数据";
// 				resolve(data + goodsData);
// 			}, 1000);
// 		});
// 	})
// 	.then(data => {
// 		console.log(data);
// 	});