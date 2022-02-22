<?php
if(!empty($_POST["send"])) {
	$name = $_POST["userName"];
	$email = $_POST["phoneNumber"];
	$subject = $_POST["mail"];
	$content = $_POST["message"];

	$toEmail = "polishl0rd2@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-view.php";
?>