<?php

use App\Http\Controllers\productController;
use App\Http\Controllers\AboutController;
use Illuminate\Support\Facades\Route;

// bisa pakai view, / ganti .
// 1 contoller bisa banyak method
// bisa menangkap parameter id dan mengirimkannya ke view
// bisa langsung kirim data ke view pada routing

// HOME
Route::get('/', function () {
    $data = [
        'title' => 'Home',
    ];
    return view('pages.home', $data);
});


// ABOUT
// Route::view('/about', 'pages.about');
Route::get('about', [AboutController::class,'index']);

// PRODUCT
Route::get('products', [ProductController::class,'index']);
Route::post('products', [ProductController::class,'store']);
Route::get('products/create', [ProductController::class,'createProduct']);


// PRODUCT DETAIL
Route::get('product/{id}', function($id) {
    return view('pages.productDetail', ['id' => $id]);
});