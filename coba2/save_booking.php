<?php
// Ambil data dari request POST
$data = file_get_contents('php://input');

// Konversi data JSON ke array asosiatif PHP
$bookingData = json_decode($data, true);

// Buat string data untuk disimpan dalam file .txt
$bookingString = "Layanan: " . $bookingData['service'] . "\n";
$bookingString .= "Nama: " . $bookingData['name'] . "\n";
$bookingString .= "Telepon: " . $bookingData['phone'] . "\n";
$bookingString .= "============================\n";

// Nama file untuk penyimpanan
$fileName = 'bookings.txt';

// Buka atau buat file .txt untuk ditulis (append)
$file = fopen($fileName, 'a');

// Tulis data booking ke dalam file .txt
fwrite($file, $bookingString);

// Tutup file setelah selesai
fclose($file);

// Respon berhasil (opsional)
echo json_encode(array('message' => 'Data booking berhasil disimpan.'));
?>
