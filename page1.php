<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoi d'un formulaire contact</title>
</head>
<body>
<?php
    $retour = mail('secretariat.csa.dakar@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: onsadev03@monsite.fr');
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
?>
</body>
</html>