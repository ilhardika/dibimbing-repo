@extends('layouts.app')

@section('content')
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/products" class="text-decoration-none"><i class="bi bi-grid me-1"></i>Products</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $product->name }}</li>
                </ol>
            </nav>

            <div class="card border-0 shadow-sm bg-dark bg-opacity-25">
                <div class="card-header bg-dark bg-opacity-50 p-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2 class="card-title fw-bold mb-0">{{ $product->name }}</h2>
                        <span class="badge bg-{{ $product->stock > 10 ? 'success' : ($product->stock > 0 ? 'warning' : 'danger') }} px-3 py-2">
                            {{ $product->stock > 0 ? $product->stock . ' in stock' : 'Out of stock' }}
                        </span>
                    </div>
                </div>
                
                <div class="card-body p-4">
                    <div class="row mb-4">
                        <div class="col-md-7">
                            <div class="p-3 bg-dark bg-opacity-10 rounded mb-4">
                                <h3 class="text-primary fw-bold mb-1">Rp {{ number_format($product->price, 0, ',', '.') }}</h3>
                                <div class="text-secondary small">Harga sudah termasuk pajak</div>
                            </div>
                            
                            <div class="mb-4">
                                <h5 class="fw-bold border-start border-primary ps-2 mb-3">Description</h5>
                                <p class="card-text">{{ $product->description }}</p>
                            </div>
                        </div>
                        
                        <div class="col-md-5">
                            <div class="card h-100 border-0 bg-dark bg-opacity-50">
                                <div class="card-header border-0 bg-transparent py-3">
                                    <h5 class="fw-bold mb-0"><i class="bi bi-info-circle me-2"></i>Product Details</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush bg-transparent">
                                        <li class="list-group-item d-flex justify-content-between px-0 py-2 bg-transparent border-secondary">
                                            <span class="text-white">ID</span>
                                            <span class="text-white fw-medium">{{ $product->product_id }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between px-0 py-2 bg-transparent border-secondary">
                                            <span class="text-white">Category ID</span>
                                            <span class="text-white fw-medium">{{ $product->category_id }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between px-0 py-2 bg-transparent border-secondary">
                                            <span class="text-white">Stock</span>
                                            <span class="text-white fw-medium">{{ $product->stock }} pcs</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between px-0 py-2 bg-transparent border-secondary">
                                            <span class="text-white">Added On</span>
                                            <span class="text-white fw-medium">{{ $product->created_at->format('d M Y') }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex gap-3 mt-4 justify-content-between">
                        <a href="/products" class="btn btn-secondary">
                            <i class="bi bi-arrow-left me-1"></i> Back to Products
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Delete Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark">
            <div class="modal-header border-bottom border-secondary">
                <h5 class="modal-title" id="deleteModalLabel">Confirm Delete</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to delete <strong>{{ $product->name }}</strong>?</p>
                <p class="text-danger small">This action cannot be undone.</p>
            </div>
            <div class="modal-footer border-top border-secondary">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action="/products/{{ $product->id }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete Product</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection