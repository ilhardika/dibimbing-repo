<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // inisialisasi table
    protected $table = 'tb_products';

    // inisialisasi primary key
    protected $primaryKey = 'product_id';

    // insialisasi item yang tidak bisa diisi
    protected $guarded = ["product_id"];

    // inisialisasi item yang bisa diisi
    // protected $fillable = [
    //     'name',
    //     'price',
    //     'stock',
    //     'description',
    // ];
}
