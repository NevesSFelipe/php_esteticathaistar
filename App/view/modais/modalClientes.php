<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="limparCamposModal()"></button>
            </div>

            <div class="modal-body">
                <form class="g-3 align-items-center" id="form_cliente">
                
                    <div id="linhaInputID" class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                    <div class="input-group-text">
                                    <i class="fa-solid fa-hashtag"></i>
                                </div>
                                <input type="text" class="form-control" id="id" name="id" placeholder="ID" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <input type="text" class="form-control" id="telefone" name="telefone" placeholder="Telefone" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-clipboard"></i>
                                </div>
                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-cake-candles"></i>
                                </div>
                                <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-venus-mars"></i>
                                </div>
                                <select class="form-select" aria-label="Default select example" id="genero" name="genero">
                                    <option value="" disabled selected>Selecione um Gênro</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <select class="form-select" aria-label="Default select example" id="autorizacaoImagem" name="autorizacaoImagem">
                                    <option value="" disabled selected>Autorizaçao Imagem</option>
                                    <option value="S">Sim</option>
                                    <option value="N">Nao</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <select class="form-select" aria-label="Default select example" id="fichaCorporal" name="fichaCorporal">
                                    <option value="" disabled selected>Ficha Corporal</option>
                                    <option value="S">Sim</option>
                                    <option value="N">Nao</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <select class="form-select" aria-label="Default select example" id="fichaFacial" name="fichaFacial">
                                    <option value="" disabled selected>Ficha Facial</option>
                                    <option value="S">Sim</option>
                                    <option value="N">Nao</option>
                                </select>
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