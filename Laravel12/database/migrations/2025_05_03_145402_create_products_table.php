<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // sintaks untuk membuat tabel produk
        Schema::create('tb_products', function (Blueprint $table) {
            $table->id("product_id"); // id default auto increment
            $table->string("name", 150); // nama produk
            $table->integer("price"); // harga produk
            $table->integer("stock"); // stok produk
            $table->text("description", 255); // deskripsi produk
            $table->integer("category_id"); // id kategori produk
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
