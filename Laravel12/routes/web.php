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

Route::get('user/', function() {
    return view('pages.users');
});

// menangkap parameter id dan mengirimkannya ke view
Route::get('user/{id}', function($id) {
    return view('pages.userDetail', ['id' => $id]);
});