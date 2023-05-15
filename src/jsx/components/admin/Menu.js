import React, { Fragment, useState, useEffect } from "react";


   
const Menu = () => {
    const [menus, setClientes] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/producto")
          .then(response => response.json())
          .then(datareact => setClientes(datareact.data))
          .catch(error => console.error(error));
      }, []);

   return (

        <Fragment>

<div class="container">
        <div class="row py-1">
            <div class="col-12 text-center list-group-item list-group-item">
                <form>
                <div class="row">
                    <div class="col-2 my-2">
                        <div>
                            <label for="exampleInputPassword1">PRODUCTO</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Producto"/>
                        </div>
                    </div>
                    <div class="col-2 my-2">
                        <div>
                            <label for="exampleInputPassword1">CANTIDAD</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cantidad"/>
                        </div>
                    </div>
                    <div class="col-2 my-2">
                        <div>
                            <label for="exampleInputPassword1">VALOR</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Valor"/>
                        </div>
                    </div>
                    <div class="col-2 my-2">
                        <div>
                            <label for="exampleInputPassword1">CATEGORIA</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Categoria"/>
                        </div>
                    </div>
                    <div class="col-2 my-2">
                        <div>
                            <label for="exampleInputPassword1">VALOR VENTA</label>
                         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Valor Venta"/>
                        </div>
                    </div>
        </div>
        <div class="row">
            <div class="col-12 py-2">
                <button type="submit" class="btn btn-primary">AGREGAR AL MENU</button>
            </div>
        </div>
    </form>
    </div>
</div>
<div class="row py-1">
    <div class="col-12 text-center list-group-item list-group-item">
        <form>
        <div class="row">
            <div class="col-2 my-2">
                <div>
                    <label for="exampleInputPassword1">PRODUCTO</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Producto"/>
                </div>
            </div>
            <div class="col-2 my-2">
                <div>
                    <label for="exampleInputPassword1">CATEGORIA</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Categoria"/>
                </div>
            </div>
            <div class="col-2 my-2">
                <div>
                    <label for="exampleFormControlTextarea1">RESETA</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div class="col-2 my-2">
                <div>
                    <label for="exampleInputPassword1">COSTO</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Costo"/>
                </div>
            </div>
            <div class="col-2 my-2">
                <div>
                    <label for="exampleInputPassword1">VALOR VENTA</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Valor Venta"/>
                </div>
            </div>
            <div class="col-2 my-2">
                <div>
                    <label for="exampleInputPassword1">CANTIDAD APROX</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Cantidad Aprox"/>
                </div>
            </div>
</div>
<div class="row">
    <div class="col-12 py-2">
        <button type="submit" class="btn btn-primary">AGREGAR AL MENU</button>
    </div>
</div>
</form>
<div class="row">
    <div class="col-12 py-2">
    <table class="table">
      <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE DEL PRODUCTO</th>
      <th scope="col">FECHA DEL PRODUCTO</th>
      <th scope="col">DESCRIPCION DEL PRODUCTO</th>
      
    </tr>
  </thead>
  <tbody>
  {menus.map(menuss => (
    <tr key={menuss.id}>
      <th scope="row">{menuss.id}</th>
      <td>{menuss.Nombre_producto}</td>
      <td>{menuss.Fecha_producto}</td>
      <td>{menuss.Descripcion_producto}</td>
     
    </tr>
  ))}
  </tbody>
</table>
    </div>
</div>
</div>
</div>
</div>
					
						
        </Fragment>
	);
};

export default Menu;
