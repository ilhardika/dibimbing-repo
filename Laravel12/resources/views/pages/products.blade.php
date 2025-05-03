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
                        <!-- Contoh data (hanya untuk UI) -->
                        <tr>
                            <td>1</td>
                            <td>Laptop Asus ROG</td>
                            <td>10</td>
                            <td>Rp 15.000.000</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <a href="#" class="btn btn-sm btn-outline-warning">
                                        <i class="bi bi-pencil"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-outline-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Include Modal Tambah Produk -->
    @include('layouts.modalAddProduct')
@endsection