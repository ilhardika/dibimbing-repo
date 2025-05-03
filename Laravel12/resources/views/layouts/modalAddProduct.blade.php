<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header border-bottom border-secondary">
                <h5 class="modal-title" id="addProductModalLabel">Tambah Produk Baru</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="productName" class="form-label">Nama Produk</label>
                        <input type="text" class="form-control bg-dark text-light border-secondary" id="productName" placeholder="Masukkan nama produk">
                    </div>
                    <div class="mb-3">
                        <label for="productPrice" class="form-label">Stock (Pcs)</label>
                        <input type="number" class="form-control bg-dark text-light border-secondary" id="productPrice" placeholder="Masukkan harga produk">
                    </div>
                    <div class="mb-3">
                        <label for="productPrice" class="form-label">Harga (Rp)</label>
                        <input type="number" class="form-control bg-dark text-light border-secondary" id="productPrice" placeholder="Masukkan harga produk">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-top border-secondary">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>