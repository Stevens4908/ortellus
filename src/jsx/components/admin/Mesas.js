import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav,Dropdown } from "react-bootstrap";


   
const Mesas = () => {
   
   return (

        <Fragment>

<div class="container">
        <div class="row py-1">
            <div class="col-12 text-center list-group-item list-group-item">
    <form>
        <div class="form-group">
          <label for="exampleInputEmail1">NUMERO DE MESAS</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero De Mesas"/>
         
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">CAPACIDAD</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Capacidad"/>
        </div>
        
        
        <button type="submit" class="btn btn-primary">REGISTRAR</button>
      </form>
      </div>
    </div>
</div>			
						
        </Fragment>
	);
};

export default Mesas;
