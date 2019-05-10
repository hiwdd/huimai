//封装ajax-get请求(把需要变动的参数，抽离出来，作为形参)
function ajaxGet(url, data, callback) {
	//1.创建ajax对象
	var xhr = new XMLHttpRequest();
	//2.给onreadystatechange绑定监听函数，用来感知ajax对象状态的改变
	xhr.onreadystatechange = function () {
		//判断ajax的状态是否等于4，且状态码等于200
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(this.responseText);
		}
	}
	//3.建立一个http链接
	xhr.open('get', url + '?' + data, true); //true是异步， false同步
	//4.发起请求
	xhr.send(null);
}


function ajaxPost(url, data, callback) {
	//1.创建ajax对象
	var xhr = new XMLHttpRequest();
	//2.给onreadystatechange绑定监听函数，用来感知ajax对象状态的改变
	xhr.onreadystatechange = function () {
		//判断ajax的状态是否等于4，且状态码等于200
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(this.responseText);
		}
	}
	//3.建立一个http链接
	xhr.open('post', url, true); //true是异步， false同步
	//4.设置post请求头，模拟表单传递数据
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	//5.发起请求
	xhr.send(data);
}