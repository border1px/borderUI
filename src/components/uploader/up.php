<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json; charset=utf-8');
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.

$uploaddir = "d:/uploader/"; 
$uploadfile = $uploaddir . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
    $data = array('code' => 0, 'url' => $uploadfile);
    echo json_encode($data);
} else {
    $data = array('code' => 1, 'msg' => $_FILES);
    echo json_encode($data);
}
?>