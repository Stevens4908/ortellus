import React, { Fragment } from "react";


   
const CrearProveedor = () => {
   
   return (

        <Fragment>

<div class="container">
        <br/>
        <div class="row">
            <div class="col-md-6" id="formulario">
                <form>
                    <div class="form-group">
                        <input type="nombre" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre"/>
                    </div>
                    <div class="form-group">
                        <input type="nit" class="form-control" id="exampleInputNit" placeholder="Nit"/>
                    </div>

                    <div class="form-group">
                        <input type="direccion" class="form-control" id="exampleInputDireccion" placeholder="Direccion"/>
                    </div>

                    <div class="row justify-content-center py-4">
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
					
						
        </Fragment>
	);
};

export default CrearProveedor;
