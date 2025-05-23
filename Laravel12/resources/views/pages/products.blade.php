@extends('layouts.app')

@section('content')
    <div class="card border-0 shadow-sm bg-dark bg-opacity-25">
        <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0">Daftar Produk</h4>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    <i class="bi bi-plus-lg me-1"></i> Tambah Produk
                </button>
            </div>

            @if (session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
        
            <div class="table-responsive">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="5%">#</th>
                            <th scope="col" width="45%">Nama Produk</th>
                            <th scope="col" width="25%">Stok</th>
                            <th scope="col" width="25%">Harga</th>
                            <th scope="col" width="25%">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Render data -->
                        @foreach ($products as $product)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->stock }}</td>
                            <td>Rp.{{ number_format($product->price, 0, ',', '.') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <a href="/product/{{ $product->product_id }}" class="btn btn-sm btn-outline-primary">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a href="#" class="btn btn-sm btn-outline-warning">
                                        <i class="bi bi-pencil"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-outline-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Include Modal Tambah Produk -->
    @include('layouts.modalCreateProduct')
@endsection