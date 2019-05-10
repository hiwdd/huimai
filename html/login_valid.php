<?php
header("Content-type:text/html;charset=utf8");

//连接数据库
mysql_connect("localhost","root","123456");
//选择数据库
mysql_query('use huimai_user');

//获取到登录页面传至的参数
$username = $_POST['name'];
$pwd = $_POST['password'];

//利用参数进行查找
$sql = "select * from user_info where username='$username' and pwd='$pwd'";
$res = mysql_query($sql);

$row = mysql_fetch_assoc($res);

if($row){
    echo "succ";
}else{
    echo "fail";
}

?>