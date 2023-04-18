import React, { Fragment } from "react";


   
const ControlMesas = () => {
   
   return (

        <Fragment>

<div class="container">
    <div class="row py-1">
        <div class="col-12 text-center list-group-item list-group-item">
            <form>
        
                    <div class="row py-2">
                        <div class="col-6">
                            <label for="exampleInputPassword1">LISTADO DE PRODUCTOS</label><br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet, autem quo ea officiis aut excepturi earum est voluptate eveniet ut nesciunt velit enim fugit, non dolor consequatur quam magnam?
                            In, nemo autem placeat id blanditiis ullam officiis soluta quaerat repudiandae architecto! Tempora dicta et facere iusto magni amet inventore quia alias expedita. Illo sapiente fugit, consectetur porro doloribus similique?
                        </div>
                        <div class="col-6">
                            <label for="exampleInputPassword1">VALOR</label><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod earum quasi corrupti aliquam dolorum officia magnam libero laboriosam, minus ab explicabo voluptate illum accusamus amet possimus placeat? Tempora, recusandae molestiae!
                            Nulla ea reiciendis non eveniet, adipisci eius quaerat at nisi nihil sapiente suscipit, ad, quasi distinctio amet. Recusandae tempore, officiis sit beatae, ducimus labore id ex quae, illum omnis culpa?
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">CUPON</button>
                    <div class="row py-2">
                        <div class="col-6">
                            <label for="exampleInputPassword1">INGRESA TU BILLETE</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="col-6">
                            <label for="exampleInputPassword1">VUELTO</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">COBRAR</button>
                    <div class="row py-2 justify-content-between">
                        <div class="col-3">
                            
                            <button type="submit" class="btn btn-danger">MEDIO DE PAGO</button>
                        </div>
                        <div class="col-3">
                            
                            <button type="submit" class="btn btn-danger">IMPRIMIR FACTURA</button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
</div>
					
						
        </Fragment>
	);
};

export default ControlMesas;
