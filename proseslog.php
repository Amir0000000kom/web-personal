<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Lakukan proses validasi dan autentikasi
    // Misalnya, cek database untuk user dan password yang sesuai

    if ($username == 'admin' && $password == 'password') {
        echo "Login berhasil!";
    } else {
        echo "Username atau password salah!";
    }
}
?>
