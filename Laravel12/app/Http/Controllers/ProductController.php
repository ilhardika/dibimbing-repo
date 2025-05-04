<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class ProductController extends Controller
{
    public function index(){
        // query untuk mengambil data dari database pakai eloquent
        $products = Product::get();
        // query untuk mengambil data dari database pakai query builder
        // $data = DB::table('tb_products')->get();
        // dd($data);

        return view('pages.products', ['products' => $products]);
    }

    public function store(Request $request) {
        // ini untuk validasi data yang dikirim dari form berdasarkan name
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'description' => 'required',
        ]);

        // query untuk menabahkan data ke database pakai eloquent berdasarkan name
        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'category_id' => rand(1, 2),
        ]);

        // setelah data ditambahkan, redirect ke halaman products dan tampilkan pesan sukses
        return redirect('products')->with('success', 'Product created successfully.');
    }

    public function createProduct(){
        return view('layouts.modalCreateProduct');
    }
}
