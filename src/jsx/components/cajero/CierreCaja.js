import React, { Fragment } from "react";


   
const CierreCaja = () => {
   
   return (

        <Fragment>

<div class="container">
        <br/>
        <div class="row justify-content-center border">
            <div class="col-md-6">
                <div class="container">
                    <form>
                        <div class="row">
                            <div class="col-5 py-3 text-left">
                                <h4>Ingresos</h4>
                            </div>
                            <div class="col-6 py-3">
                                <input type="nombre" class="form-control" id="exampleInputVacio"
                                    aria-describedby="emailHelp" placeholder=" " />
                            </div>
                            <div class="col-5 py-3 text-left">
                                <h4>Gastos</h4>
                            </div>
                            <div class="col-6 py-3">
                                <input type="nombre" class="form-control" id="exampleInputVacio"
                                    aria-describedby="emailHelp" placeholder=" " />
                            </div>
                            <div class="col-5 py-3 text-left">
                                <h4>Costo fijo</h4>
                            </div>
                            <div class="col-6 py-3 ">
                                <input type="nombre" class="form-control" id="exampleInputVacio"
                                    aria-describedby="emailHelp" placeholder=" " /> 
                            </div>

                            <div class="col-4 py-3 text-right">
                                <h4>Total</h4>
                            </div>
                            <div class="col-6 py-3">
                                <input type="nombre" class="form-control" id="exampleInputVacio"
                                    aria-describedby="emailHelp" placeholder=" " />
                            </div>
                        </div>
                        <div class="row justify-content-center py-3">
                            <button type="submit" class="btn btn-primary">Guadar caja</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
					
						
        </Fragment>
	);
};

export default CierreCaja;
