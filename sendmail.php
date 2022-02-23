<?php
       // from the form
       $name = trim(strip_tags($_POST['userName']));
       $number = trim(strip_tags($_POST['phoneNumber']));
       $email = trim(strip_tags($_POST['mail']));
       $message = htmlentities($_POST['message']);

       // set here
       $subject = "Zapytanie z formularza";
       $to = 'polishl0rd2@gmail.com';

        $body = <<<HTML
Imię i nazwisko: $name \n E-mail: $email \n Numer telefonu: $number \n Wiadomość: \n $message
HTML;

       $headers = "Zapytanie z formularza";

       // send the email
       mail($to, $subject, $body, $headers);
?>