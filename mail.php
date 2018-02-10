<?php



// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

//if (empty($_POST['phone2'])){

// get variables from the form
$from_name = filter_var($_POST['from_name'], FILTER_SANITIZE_STRING);
$from_email = filter_var($_POST['from_email'], FILTER_SANITIZE_STRING);
$mail_subject = filter_var($_POST['mail_subject'], FILTER_SANITIZE_STRING);
$mail_body = filter_var($_POST['mail_body'], FILTER_SANITIZE_STRING);


//Walidacja
if(empty($from_name)){

    header('location: index.php?nouser');
    exit();
}
if(empty($from_email)){

    header('location: index.php?noemail');
    exit();
}
if(empty($mail_subject)){

    header('location: index.php?nosubject');
    exit();
}
if(empty($mail_body)){

    header('location: index.php?nomessage');
    exit();
}

$mail = new PHPMailer(true);                              // Passing true enables exceptions
try {
    //Server settings
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'cmzet2@gmail.com';                 // SMTP username
    $mail->Password = 'haslo';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, ssl also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    //Sender
    $mail->setFrom('cmzet2@gmail.com', 'Mateusz');

    //Recipients
    $mail->addAddress($from_email,$from_name);            // Add a recipient
//    $mail->addAddress('jan@domena.com', 'jan');               // Name is optional
//    $mail->addReplyTo('info@example.com', 'Information');
//    $mail->addCC('cc@example.com');
//    $mail->addBCC('jan@domena.com', 'jan');
    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
//    $body = '<p><strong>Hello</strong> to jest mój pierwszy mail z <b>PHPMailer</b></p>' . $from_name . 'temat wiadomośći' . $mail_subject;
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $mail_subject;
    $mail->Body = $mail_body;
    $mail->AltBody = strip_tags($mail_body);
    $mail->send();
    echo 'Message has been sent';
//    header('location: contact.html?sent');
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

//}
