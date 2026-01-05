<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once '../db/config.php';

$data = json_decode(file_get_contents('php://input'));
$id = $data->id ?? 0;
$name = $data->Name ?? '';
$email = $data->Email ?? '';
$age = $data->Age ?? 0;
$gender = $data->Gender ?? '';

if ($gender === '' || is_null($gender)) {
    $gender = 'Not Specified';
}


if ($id == 0 || $name == '' || $email == '') {
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

$query = mysqli_query($connect, "UPDATE USERS SET name='$name', email='$email', age=$age, gender='$gender' WHERE id = $id");

if (!$query) {
    die(json_encode(['error' => mysqli_error($connect)]));
}
$data_changed=mysqli_query($connect,"select * from users where id=$id");

$response=mysqli_fetch_assoc($data_changed);

echo json_encode($response);
?>
