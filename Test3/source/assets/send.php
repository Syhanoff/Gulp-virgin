<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Номер телефона:</b><br>$phone";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  $mail->Host       = 'smtp.yandex.ru';
  $mail->Username   = 'Ssyhanoff@yandex.ru';
  $mail->Password   = 'wbthkfxiwradgjyg';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('Ssyhanoff@yandex.ru', 'Pulse');

  $mail->addAddress('Ssyhann@yandex.ru', 'Me');

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  };
