import React, { Fragment } from "react";


   
const CrearCaja = () => {
   
   return (

        <Fragment>


	<div class="container">
        <br/>
        <div class="row justify-content-center">
            <div class="col-md-4 ">
                <form>
                    <div class="form-group">
                        <input type="nombre" class="form-control" id="exampleInputValor" aria-describedby="emailHelp"
                            placeholder="Valor"/>
                    </div>
                    <div class="form-group">
                        <input type="nombre" class="form-control" id="exampleInputFecha" aria-describedby="emailHelp"
                            placeholder="Fecha"/>
                    </div>
                    <div class="form-group">
                        <input type="nombre" class="form-control" id="exampleInputHora" aria-describedby="emailHelp"
                            placeholder="Hora"/>
                    </div>
                    <div class="row justify-content-center py-3">
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>	
						
        </Fragment>
	);
};

export default CrearCaja;




