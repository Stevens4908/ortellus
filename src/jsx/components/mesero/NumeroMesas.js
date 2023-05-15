import React, { Fragment, useState } from "react";


   
const NumeroMesas = () => {
    const [mesas, setMesas] = useState('');
  
  
  

        function mesaDisponibles() {
    
            fetch("http://127.0.0.1:8000/api/mesa")
                .then(response => response.json())
                .then(datareact => {
                
                setMesas(datareact.data.length);
                })
              .catch(error => console.error(error));
          }

          mesaDisponibles();
          console.log("numero de mesas", mesas);
   return (

        <Fragment>

<div class="container">
        <form>
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Número de mesas</h2>
                </div>
            </div>
            <br/>
            <div class="row">
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
                <div class="col-md-2">
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
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">6</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">7</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">8</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">9</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">10</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">11</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <div class="col-md-4 border border-dark">
                            <h3 class="text-center">12</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-8">
                    <h3 class="text-center">Menu</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-5">
                            <h4 class="text-center">Producto</h4>
                        </div>
        
                        <div class="col-md-3">
                            <h4 class="text-center">Cantidad</h4>
                        </div>
        
                        <div class="col-md-4">
                            <h4 class="text-center">Valor</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h4 class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                facere,
                                autem
                                reiciendis, rem, commodi optio tempore sequi a porro at eius cupiditate deserunt
                                voluptatibus
                                necessitatibus inventore laboriosam? Necessitatibus, quis quos.</h4>
                        </div>
                        <div class="col-md-4">
                            <h4 class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                facere,
                                autem
                                reiciendis, rem, commodi optio tempore sequi a porro at eius cupiditate deserunt
                                voluptatibus
                                necessitatibus inventore laboriosam? Necessitatibus, quis quos.</h4>
                        </div>
                        <div class="col-md-4">
                            <h4 class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                                pariatur
                                odio
                                dolor repudiandae modi sunt facere facilis, eius commodi laborum quas mollitia
                                consequuntur
                                neque
                                eaque debitis cupiditate porro quis. Error.</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 pb-5 align-self-end text-center">
                    <div class="row">
                        <div class="col-md-10 pb-5">
                            <div class="input-group md-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Busqueda" aria-label="Busqueda"
                                    aria-describedby="basic-addon1 " />
                            </div>
                            <div class="row justify-content-center py-4">
                                <button type="submit" class="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
					
						
        </Fragment>
	);
};

export default NumeroMesas;
