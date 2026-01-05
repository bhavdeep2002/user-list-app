<?php

header('Content-Type: application/json');
require_once 'db/config.php';

$query=mysqli_query($connect,'select * from USERS');

    if(!$query){
       die(json_encode(['error' => mysqli_error($connect)]));
    }

    $res = $query->fetch_all(MYSQLI_ASSOC);
echo json_encode($res);

?>
