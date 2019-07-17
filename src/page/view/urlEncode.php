<?php
//code = 0加密  = 1解密
$encode = $_POST["encode"];
$code = $_POST["code"];
if($code == 0){
	$raw = urlencode($encode);
}
if($code == 1){
	$raw = urldecode($encode);
}
$raw_success = array('error' => 1, 'msg' => $raw);
$res_success = json_encode($raw_success);
echo $res_success;
?>