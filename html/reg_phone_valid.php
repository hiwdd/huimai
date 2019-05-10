<?php
header("Content-type:text/html;charset=utf8");

//连接数据库
mysql_connect("localhost","root","123456");
//选择数据库
mysql_query('use huimai_user');

//获取参数查询数据库
//接受post参数
$phone = $_POST['phone'];

$sql_phone = "select * from user_info where phone='$phone'";

$res_phone = mysql_query($sql_phone);

$row = mysql_fetch_assoc($res_phone);

if($row>0){
    echo "fail";
}else{
    echo "succ";
}