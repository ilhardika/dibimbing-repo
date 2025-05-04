<div class="modal fade @if ($errors->any()) show @endif" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel"  aria-hidden="@if ($errors->any()) false @else true @endif" style="@if ($errors->any()) display: block; @endif">
    <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header border-bottom border-secondary">
                <h5 class="modal-title" id="addProductModalLabel">Tambah Produk Baru</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="/products" method="POST">
                    @csrf {{-- token untuk blade --}} 
                    <div class="mb-3">
                        <label for="name" class="form-label">Nama Produk</label>
                        <input type="text" class="form-control bg-dark text-light border-secondary" id="name" name="name" placeholder="Masukkan nama produk">
                        @error('name')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="stock" class="form-label">Stock (Pcs)</label>
                        <input type="number" class="form-control bg-dark text-light border-secondary" id="stock" name="stock" placeholder="Masukkan stock produk">
                        @error('stock')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Harga (Rp)</label>
                        <input type="number" class="form-control bg-dark text-light border-secondary" id="price" name="price" placeholder="Masukkan harga produk">
                        @error('price')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Deskripsi Produk</label>
                        <textarea class="form-control bg-dark text-light border-secondary" id="description" name="description" rows="3" placeholder="Masukkan deskripsi produk"></textarea>
                        @error('description')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror   
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>