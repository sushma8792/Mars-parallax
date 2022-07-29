<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<?php 

$s = "localhost";
$user = "root";
$pass = "";
$db = "newsletter";

$con = mysqli_connect($s, $user, $pass, $db) or die("Failure to Connect");

$remail = $_POST['Email'];

$remail = stripcslashes($remail);


$sql = "insert into mail_ids(email) values('$remail');";

$a = mysqli_query($con,$sql);

echo "Thank you for joining us! Look for us in the mail <3";


?>