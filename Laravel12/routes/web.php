<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $data = [
        'title' => 'Home',
    ];
    return view('pages.home', $data);
});

// bisa pakai view, / ganti .
Route::view('/about', 'pages.about');

Route::get('products/', function() {
    return view('pages.products');
});

// menangkap parameter id dan mengirimkannya ke view
Route::get('product/{id}', function($id) {
    return view('pages.productDetail', ['id' => $id]);
});