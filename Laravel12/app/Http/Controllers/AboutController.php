<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $store_information = [
            'name' => 'TechStore',
            'address' => '123 Tech Street, Jakarta, Indonesia',
            'phone' => '+62 812 3456 7890',
            'email' => 'info@techstore.com',
            'description' => 'TechStore is your one-stop shop for the latest laptops and accessories.',
            'opening_hours' => 'Monday - Saturday: 9:00 AM - 8:00 PM',
        ];
        return view('pages.about', compact('store_information'));
    }
}
