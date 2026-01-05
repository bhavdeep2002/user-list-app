<?php

header('Content-Type:application/json');
require_once '../db/config.php';

$req=json_decode(file_get_contents('php://input'));

$id=(int)$req->id;

$query=mysqli_query($connect,"DELETE from USERS where id=$id");

if(!$query){
    die(json_encode(['error'=>mysqli_error($connect)]));
}

echo json_encode(['delete'=>true]);

?>