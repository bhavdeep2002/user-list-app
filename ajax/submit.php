<?php
header('Content-Type: application/json');
require_once '../db/config.php';

 $data =json_decode(file_get_contents('php://input'));
      // data is now object

      $name=$data->Name??'';
      $email=$data->Email??'';
      $age=$data->Age??0;
      $gender=$data->Gender??'';
      
      if ($gender === '' || is_null($gender)|| $gender==='Select Gender') {
    $gender = 'Not Specified';
}



      if($name=='' || $email=='' || $age>99)
      {
          echo json_encode(['error' => 'Name and Email are required.']);
        exit;
      }
      $query=mysqli_query($connect,"INSERT INTO USERS (name,email,age,gender) Values ('$name','$email','$age','$gender')");

       if(!$query){
       die(json_encode(['error' => mysqli_error($connect)]));
    }

      $added_record=mysqli_query($connect,"Select * from USERS where name='$name'");

    $response=mysqli_fetch_assoc($added_record); ;

    echo json_encode($response);

?>