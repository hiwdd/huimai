<?php 

//1.接受post参数
$username = $_POST['username'];
$phone = $_POST['phone'];
$pwd = $_POST['pwd'];

//读写json文件保存数据
$json_string = file_get_contents('./login.json');
$aldata = json_decode( $json_string, true );//第二个参数保证将jSON字符串解码成数组
//一个用来写入JSON文件的关系数组
$arr = Array('username' => $username, 
    'phone' => $phone,
    'pwd' => $pwd);
array_push( $aldata, $arr );
// $aldata.push($arr);

$data_new = json_encode( $aldata );//将PHP变量编码成JSON字符串
file_put_contents( './login.json', $data_new );

echo 200;