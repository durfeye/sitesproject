<?php 
$name = $_POST['userName'];
$phone = $_POST['phoneNumber'];
$email = $_POST['mail'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "emailaddress@here.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n Phone: $phone";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>