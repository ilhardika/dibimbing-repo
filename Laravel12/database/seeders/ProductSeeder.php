<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed kategori terlebih dahulu
        DB::table('tb_products')->insert(
            [[
                'name' => 'ASUS ROG Strix G15',
                'price' => 15999000,
                'stock' => 25,
                'description' => 'Laptop gaming dengan AMD Ryzen 7 5800H, NVIDIA GeForce RTX 3060, 16GB RAM, 512GB SSD, 15.6" FHD 144Hz',
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dell XPS 13',
                'price' => 19999000,
                'stock' => 15,
                'description' => 'Laptop premium dengan Intel Core i7, 16GB RAM, 512GB SSD, 13.4" FHD+ InfinityEdge',
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Apple MacBook Air M1',
                'price' => 18999000,
                'stock' => 10,
                'description' => 'Laptop tipis dan ringan dengan Apple M1 chip, 8GB RAM, 256GB SSD, 13.3" Retina Display',
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lenovo ThinkPad X1 Carbon',
                'price' => 24999000,
                'stock' => 5,
                'description' => 'Laptop bisnis premium dengan Intel Core i7, 16GB RAM, 512GB SSD, 14" FHD IPS',
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }

}