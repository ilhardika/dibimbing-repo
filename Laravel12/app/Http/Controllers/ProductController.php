<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(){
        // query untuk mengambil data dari database pakai eloquent
        $products = product::get();
        // query untuk mengambil data dari database pakai query builder
        // $data = DB::table('tb_products')->get();
        // dd($data);

        return view('pages.products', ['products' => $products]);
    }

    public function addProduct(){
        return view('layouts.modalAddProduct');
    }
}
