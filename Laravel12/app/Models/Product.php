<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // inisialisasi table
    protected $table = 'products';

    // inisialisasi primary key
    protected $primaryKey = 'id_product';

    // insialisasi item yang tidak bisa diisi
    protected $guarded = ["id_product"];

    // inisialisasi item yang bisa diisi
    // protected $fillable = [
    //     'name',
    //     'price',
    //     'stock',
    // ];
}
