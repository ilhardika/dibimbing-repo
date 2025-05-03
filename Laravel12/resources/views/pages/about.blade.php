@extends('layouts.app')

@section('content')
<div class="container py-5">
    <!-- Header Section -->
    <div class="text-center mb-5">
        <h2 class="fw-bold mb-3">About Us</h2>
        <p class="text-secondary">Get to know more about our store</p>
    </div>
    
    <!-- Store Info Section -->
    <div class="row mb-5">
        <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="card h-100 border-0 bg-dark bg-opacity-25">
                <div class="card-body p-4">
                    <h4 class="fw-bold mb-4"><i class="bi bi-shop me-2"></i>{{ $store_information['name'] }}</h4>
                    <p>{{ $store_information['description'] }}</p>
                    
                    <div class="mt-4">
                        <h5 class="fw-bold mb-3">Contact Details</h5>
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <i class="bi bi-geo-alt me-2"></i> {{ $store_information['address'] }}
                            </li>
                            <li class="mb-3">
                                <i class="bi bi-telephone me-2"></i> {{ $store_information['phone'] }}
                            </li>
                            <li class="mb-3">
                                <i class="bi bi-envelope me-2"></i> {{ $store_information['email'] }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-6">
            <div class="card h-100 border-0 bg-dark bg-opacity-25">
                <div class="card-body p-4">
                    <h4 class="fw-bold mb-3"><i class="bi bi-clock me-2"></i>Business Hours</h4>
                    <p>{{ $store_information['opening_hours'] }}</p>
                    
                    <div class="mt-4">
                        <h5 class="fw-bold mb-3">Find Us</h5>
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65294460244!2d106.68941359999999!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1651233783211!5m2!1sid!2sid" 
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Why Choose Us Section -->
    <div class="mb-4">
        <h3 class="fw-bold text-center mb-4"><i class="bi bi-award me-2"></i>Why Choose Us?</h3>
        
        <div class="row g-4">
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-0 bg-dark bg-opacity-25 text-center">
                    <div class="card-body p-4">
                        <i class="bi bi-check-circle-fill fs-1 mb-3"></i>
                        <h5 class="fw-bold mb-3">Quality Products</h5>
                        <p class="text-secondary mb-0">We only source the best products for our customers.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-0 bg-dark bg-opacity-25 text-center">
                    <div class="card-body p-4">
                        <i class="bi bi-truck fs-1 mb-3"></i>
                        <h5 class="fw-bold mb-3">Fast Delivery</h5>
                        <p class="text-secondary mb-0">Quick and reliable delivery to your doorstep.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-0 bg-dark bg-opacity-25 text-center">
                    <div class="card-body p-4">
                        <i class="bi bi-headset fs-1 mb-3"></i>
                        <h5 class="fw-bold mb-3">24/7 Support</h5>
                        <p class="text-secondary mb-0">Our team is always ready to assist you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection