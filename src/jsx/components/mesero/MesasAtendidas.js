import React, { Fragment } from "react";


   
const MesasAtendidas = () => {
   
   return (

        <Fragment>

<div class="container">
        <form>
            <br/>
            <div class="row justify-content-center">
                <div class="col-md-2 mb-4">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">1</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">2</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">3</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-2 mb-4">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">4</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">5</h3>
                        </div>
                    </div>
                </div>
            </div>
        </form>



</div>




    <div class="row justify-content-center">
        <div class="col-md-15 py-4">
            <button type="submit" class="btn btn-primary">Agregar</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 ">
            <div class="input-group justify-content-center py-4">
                <div class="input-group-prepend ">
                    <textarea class="form-control" rows="6" cols="40" aria-label="With textarea"
                        placeholder="Mensaje"></textarea>
                </div>
            </div>
        </div>
    </div>
   

    
					
						
        </Fragment>
	);
};

export default MesasAtendidas;
