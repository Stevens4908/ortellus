import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav,Dropdown } from "react-bootstrap";


   
const AddTeam = () => {
   
   return (

        <Fragment>

	<div class="container">
        <div class="row py-1">
            <div class="col-10 text-center list-group-item list-group-item">
    <form>
        <div class="form-group">
          <label for="exampleInputEmail1">NOMINA</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nomina"/>
         
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">NOMBRE</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">CEDULA</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cedula"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">TELEFONO</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Telefono"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">CARGO</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cargo"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">DIRECCION</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Direccion"/>
          </div>
        
        <button type="submit" class="btn btn-primary">REGISTRAR</button>
      </form>
      </div>
    </div>
</div>
					
						
        </Fragment>
	);
};

export default AddTeam;
