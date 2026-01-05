<?php
$connect = mysqli_connect('localhost', 'root', '', 'my_app');

if (!$connect) {
    die(json_encode(['error' => mysqli_error($connect)]));
}
?>
