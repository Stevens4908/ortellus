import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav,Dropdown } from "react-bootstrap";
  
const AddTeam = () => {
  const [clientes, setClientes] = useState([]);
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cliente")
      .then(response => response.json())
      .then(datareact => setClientes(datareact.data))
      .catch(error => console.error(error));
  }, []);
  function saludo() {
    
    fetch("http://127.0.0.1:8000/api/cliente/1")
      .then(response => response.json())

      .then(datareact => {
        //console.log("dato",datareact.data.Cedula)
        setCedula(datareact.data.Cedula);
        setTelefono(datareact.data.Telefono);
        setDireccion(datareact.data.Direccion);
        
      })
      .catch(error => console.error(error));
  }
  
   return (

        <Fragment>
         
	<div class="container">
        <div class="row py-1">
            <div class="col-12 text-center list-group-item list-group-item">
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
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Cedula"
              value={cedula}
              onChange={e => setCedula(e.target.value)}
              />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">TELEFONO</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Telefono"
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">CARGO</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cargo"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">DIRECCION</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Direccion"
              value={direccion}
              onChange={e => setDireccion(e.target.value)}
            />
          </div>
        
          {/*<button type="submit" class="btn btn-primary" onClick={saludo}>REGISTRAR</button>*/} 
      </form>
      <button type="button" class="btn btn-primary" onClick={saludo}>REGISTRAR</button>
      <table class="table">
      <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE COMPLETO</th>
      <th scope="col">CEDULA</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">CORREO</th>
      <th scope="col">DIRECCION</th>
    </tr>
  </thead>
  <tbody>
  {clientes.map(cliente => (
    <tr key={cliente.id}>
      <th scope="row">{cliente.id}</th>
      <td>{cliente.Nombre_Completo}</td>
      <td>{cliente.Cedula}</td>
      <td>{cliente.Telefono}</td>
      <td>{cliente.Email}</td>
      <td>{cliente.Direccion}</td>
    </tr>
  ))}
  </tbody>
</table>
      </div>
    </div>
</div>
					
						
        </Fragment>
	);
};

export default AddTeam;
