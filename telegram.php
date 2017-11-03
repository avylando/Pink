<?php

/* https://api.telegram.org/bot454235322:AAGdoQuXnC5ZvZgG0Mu_2aC7XoP0rVrwAok/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "454235322:AAGdoQuXnC5ZvZgG0Mu_2aC7XoP0rVrwAok";
$chat_id = "-295872599";
$arr = array(
  'Имя пользователя: ' => $name,
  'Фамилия:' => $surname,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Message sent!";
} else {
  echo "Error";
}
?>