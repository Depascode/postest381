<?php
// Proses login akan ditambahkan sesuai dengan kebutuhan aplikasi Anda
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Contoh validasi login, Anda dapat menggantinya dengan validasi sesuai kebutuhan
    if ($username === 'admin' && $password === 'admin123') {
        echo 'Login berhasil!';
    } else {
        echo 'Login gagal! Cek kembali username dan password.';
    }
}
?>
