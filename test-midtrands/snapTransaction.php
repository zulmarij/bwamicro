<?php

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/');
$dotenv->load();

// Set your Merchant Server Key
\Midtrans\Config::$serverKey = $_SERVER['MIDTRANS_SERVER_KEY'];
// Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
\Midtrans\Config::$isProduction = false;
// Set sanitization on (default)
\Midtrans\Config::$isSanitized = true;
// Set 3DS transaction for credit card to true
\Midtrans\Config::$is3ds = true;

$params = array(
    'transaction_details' => array(
        'order_id' => rand(),
        'gross_amount' => 10000,
    ),
    'customer_details' => array(
        'first_name' => 'zul',
        'last_name' => 'marij',
        'email' => 'muhammadzulmarij@gmail.com',
        'phone' => '081350887602',
    ),
);

// $snapToken = \Midtrans\Snap::getSnapToken($params);
// echo $snapToken;

$snapUrlRedirect = \Midtrans\Snap::createTransaction($params)->redirect_url;
echo $snapUrlRedirect;

