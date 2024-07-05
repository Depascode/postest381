<?php
// Ambil data dari request POST
$data = file_get_contents('php://input');

// Konversi data JSON ke array asosiatif PHP
$orderData = json_decode($data, true);

// Buat string data untuk disimpan dalam file .txt
$orderString = "Nama: " . $orderData['fullname'] . "\n";
$orderString .= "Email: " . $orderData['email'] . "\n";
$orderString .= "Telepon: " . $orderData['phone'] . "\n";
$orderString .= "Layanan: " . $orderData['service'] . "\n";
$orderString .= "============================\n";

// Nama file untuk penyimpanan
$fileName = 'orders.txt';

// Buka atau buat file .txt untuk ditulis (append)
$file = fopen($fileName, 'a');

// Tulis data pesanan ke dalam file .txt
fwrite($file, $orderString);

// Tutup file setelah selesai
fclose($file);

// Respon berhasil (opsional)
echo json_encode(array('message' => 'Data pesanan berhasil disimpan.'));
?>
