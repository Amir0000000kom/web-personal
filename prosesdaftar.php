<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Lakukan proses validasi dan simpan data user baru
    // Misalnya, simpan data ke database

    echo "Pendaftaran berhasil!";
}
?>
