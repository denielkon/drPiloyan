<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$mail->isSMTP();                              
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'drpiloyan@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$piloyanevgeniya30!'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 995; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('drpiloyan@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('denielkon@yandex.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$user_name . ' оставил заявку, его телефон ' .$user_phone.
$mail->AltBody = '';