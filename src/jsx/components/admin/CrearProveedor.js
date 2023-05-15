import React, { Fragment, useState, useEffect } from "react";


   
const CrearProveedor = () => {
    const [restaurantes, setClientes] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/restaurantes")
          .then(response => response.json())
          .then(datareact => setClientes(datareact.data))
          .catch(error => console.error(error));
      }, []);





   return (

        <Fragment>

<div class="container">
        <br/>
        <div class="row">
            <div class="col-md-8" id="formulario">
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
        <div class="row">
            <div class="col-md-12" id="formulario">
            <table class="table">
      <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE RESTAURANTE</th>
      <th scope="col">DIRECCION</th>
     
      
    </tr>
  </thead>
  <tbody>
  {restaurantes.map(restaurantess => (
    <tr key={restaurantess.id}>
      <th scope="row">{restaurantess.id}</th>
      <td>{restaurantess.nombre}</td>
      <td>{restaurantess.direccion}</td>
      
     
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

export default CrearProveedor;
