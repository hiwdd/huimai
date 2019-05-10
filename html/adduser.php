<?php 
header("Content-type:text/html;charset=utf8");

//连接数据库
mysql_connect("10.36.133.193","mine","111111");
//选择数据库
mysql_query('use huimai_user');

//获取参数并insert进数据库
//接受post参数
$username = $_POST['username'];
$phone = $_POST['phone'];
$pwd = $_POST['pwd'];

//插入数据
$sql = "insert into user_info (username,phone,pwd) values ('$username','$phone','$pwd')";
$res = mysql_query($sql);

$row = mysql_affected_rows();

if($row > 0){
    echo "succ";
}else{
    echo "fail";
}

?>