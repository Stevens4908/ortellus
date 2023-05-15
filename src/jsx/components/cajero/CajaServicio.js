import React, { Fragment } from "react";
import axios from 'axios';
//import { saludo } from '../mike';

 

   
const CajaServicio = () => {
   
    //saludo()
   return (
            
        <Fragment>

    
<div class="container">
        <div class="row py-1">
                
            <div class="col-12 text-center list-group-item list-group-item">
    <form>
        <div class="col-12 my-2">
            <div>
               
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Menu"></textarea>
            </div>
        </div>
        <div class="form-group col-10 my-2">
          
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cantidad"/>
        </div>
        <div class="form-group col-10 my-2">
          
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cupon"/>
          </div>
        
        
        <button type="submit" class="btn btn-primary">COBRAR</button>
        <div class="row py-2">
            <div class="col-6">
                <label for="exampleInputPassword1">BILLETE</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="col-6">
                <label for="exampleInputPassword1">VUELTO</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
        </div>
        <div class="row py-2 justify-content-between">
            <div class="col-3">
                
                <button type="submit" class="btn btn-danger">MEDIO DE PAGO</button>
            </div>
            <div class="col-3">
                
                <button type="submit" class="btn btn-danger">IMPRIMIR FACTURA mike sa</button>
            </div>
        </div>
      </form>
      </div>
    </div>
</div>
					
						
        </Fragment>
	);
};

export default CajaServicio;
