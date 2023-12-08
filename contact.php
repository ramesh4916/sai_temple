<?php

//database connection

$con =mysqli_connect('localhost','root','','test');

if(isset($_POST['sub'])){
  $fn=$_POST['fullName'];
  $em=$_POST['email'];
  $phone=$_POST['phone'];
  $msg=$_POST['message'];
}
  $sql = "insert into registration(fullName,email,phone,message) values ('$fn','$em','$phone','$msg')";

  $query=mysqli_query($con,$sql);
if($query==true)
  echo "<h2 style='color:red;text-align:center'>Form Submitted...</h2>"
?>