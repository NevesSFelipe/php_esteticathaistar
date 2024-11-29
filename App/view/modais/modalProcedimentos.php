<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form class="g-3 align-items-center">

                    <div class="row">

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-clipboard"></i>
                                </div>
                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" />
                            </div>
                        </div>
    
                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-hand-holding-dollar"></i>
                                </div>
                                <input type="number" step="0.01" min="0.00" class="form-control" id="preco" name="preco" placeholder="Preço" />
                            </div>
                        </div>

                    </div>


                </form>
            </div>

            <div class="modal-footer">
                <button type="button" id="btnAcaoModal"></button>
            </div>
        </div>
    </div>
</div>