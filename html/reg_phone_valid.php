<?php
header("Content-type:text/html;charset=utf8");

//连接数据库
mysql_connect("10.36.133.193","mine","111111");
//选择数据库
mysql_query('use huimai_user');

//获取参数查询数据库
//接受post参数
$phone = $_POST['phone'];

$sql_phone = "select * from user_info where phone='$phone'";

$res_phone = mysql_query($sql_phone);

if($res_phone){
    echo "fail";
}else{
    echo "succ";
}