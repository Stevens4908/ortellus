/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let restaurante = [
        "",
        "addteam",
        "mesas",
        "order",
        "order-list",
        "customer-list",
		"task",
      ],
      empleados = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      mesas = ["email-compose", "email-inbox", "email-read"],
      productos = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      insumos = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      clientes = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      domicilios = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
      pedidos = [
            "todo",
            "form-redux",
            "form-redux-wizard", 
        ],
      facturacion = ["widget-basic"],
      estadistica = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">


            <li className={`${restaurante.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Admin</span>
              </Link>
				<ul >
					<li>
						<Link className={`${path === "" ? "mm-active" : ""}`} to="/" onClick={() => this.props.onClick3()}>Admin</Link>
					</li>
					<li>
						<Link className={`${path === "addteam" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/addteam">
							Agregar Equipo
						</Link>
					</li>
					<li>
						<Link  onClick={() => this.props.onClick()} to="/mesas" >
							Mesas
						</Link>
					</li>
					<li>
						<Link className={`${path === "order" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/crear-cupon">
							Crear Cupon
						</Link>
					</li>
					<li>
						<Link className={`${path === "order-list" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/crear-proveedor">
							Crear Proveedor
						</Link>
					</li>
					<li>
					  <Link className={`${ path === "customer-list" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/costos-fijos"
					  >
						Costos Fijos
					  </Link>
					</li>
					<li>
						<Link className={`${path === "task" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/menu">Menu</Link>
					</li>						
				</ul>
            </li>






            <li className={`${empleados.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Mesero</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/numero-de-mesas">Numero de Mesas</Link>
                </li>
				<li>
					<Link className={`${path === "post-details" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/mesas-atendidas">Mesas Atendidas</Link>
                </li>


                {/*  <li className={`${email.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow" to="#" >Email</Link>
                  <ul
                    
                    className={`${email.includes(path) ? "mm-show" : ""}`}
                  >
                    <li>
                      <Link
                        className={`${
                          path === "email-compose" ? "mm-active" : ""
                        }`}
                        to="/email-compose"
                        onClick={() => this.props.onClick()}
                      >
                        Compose
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-inbox" ? "mm-active" : ""
                        }`}
                        to="/email-inbox"
                        onClick={() => this.props.onClick()}
                      >
                        Inbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-read" ? "mm-active" : ""
                        }`}
                        to="/email-read"
                        onClick={() => this.props.onClick()}
                      >
                        Read
                      </Link>
                    </li>
                  </ul>
                </li>  */}

{/*
                <li>
                  <Link
                    className={`${path === "app-calender" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/app-calender"
                  >
                    Calendar
                  </Link>
                </li>
*/}

              {/*  <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
                  <Link className="has-arrow" to="#" >
                    Shop
                  </Link>
                  <ul
                    
                    className={`${shop.includes(path) ? "mm-show" : ""}`}
                  >
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-grid" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-grid"
                        onClick={() => this.props.onClick()}
                      >
                        Product Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-list" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-list"
                        onClick={() => this.props.onClick()}
                      >
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-detail" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-detail"
                        onClick={() => this.props.onClick()}
                      >
                        Product Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-order" ? "mm-active" : ""
                        }`}
                        to="/ecom-product-order"
                        onClick={() => this.props.onClick()}
                      >
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-checkout" ? "mm-active" : ""
                        }`}
                        to="/ecom-checkout"
                        onClick={() => this.props.onClick()}
                      >
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-invoice" ? "mm-active" : ""
                        }`}
                        to="/ecom-invoice"
                        onClick={() => this.props.onClick()}
                      >
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-customers" ? "mm-active" : ""
                        }`}
                        to="/ecom-customers"
                        onClick={() => this.props.onClick()}
                      >
                        Customers
                      </Link>
                    </li>
                  </ul>
                </li>  */}


              </ul>
            </li>






            <li className={`${mesas.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Cajero</span>
              </Link>
              <ul >
                <li>
                  <Link
                    className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/crear-caja"
                  >
                    Crear Caja
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/servicio-caja"
                  >
                    Servicio en Caja
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-chartist" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/control-mesas"
                  >
                    Control Mesas
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-sparkline" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/cierre-caja"
                  >
                    Cierre Caja
                  </Link>
                </li>
               {/* <li>
                  <Link
                    className={`${
                      path === "chart-apexchart" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-apexchart"
                  >
                    Apexchart
                  </Link>
                  </li>*/}
              </ul>
            </li>




{/*

            <li className={`${productos.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">Productos</span>
              </Link>
              <ul >
                <li>
                  <Link
                    className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-accordion"
                  >
                    Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-alert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-alert"
                  >
                    Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-badge" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-badge"
                  >
                    Badge
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-button" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-modal" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-modal"
                  >
                    Modal
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-button-group" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button-group"
                  >
                    Button Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-list-group"
                  >
                    List Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-media-object" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-media-object"
                  >
                    Media Object
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-card" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-card"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-carousel"
                  >
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-dropdown"
                  >
                    Dropdown
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-popover" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-popover"
                  >
                    Popover
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-progressbar" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-progressbar"
                  >
                    Progressbar
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-tab" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-tab"
                  >
                    Tab
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-typography" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-typography"
                  >
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-pagination"
                  >
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-grid" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-grid"
                  >
                    Grid
                  </Link>
                </li>
              </ul>
            </li>






            <li className={`${insumos.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Insumos</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "uc-select2" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-select2">Select 2</Link>
                </li>
                <li>
					<Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-nestable">Nestedable</Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "uc-noui-slider" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/uc-noui-slider"
                  >
                    Noui Slider
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/uc-sweetalert"
                  >
                    Sweet Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/uc-toastr"
                  >
                    Toastr
                  </Link>
                </li>
                <li>
					<Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/map-jqvmap">Jqv Map</Link>
                </li>
				<li>
					<Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-lightgallery">Light Gallery</Link>
                </li>
                 <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> 
              </ul>
            </li>







            <li className={`${clientes.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-book"></i><span className="nav-text">Clientes</span>
                </Link>
                <ul>
                    <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/todo">Todo</Link></li> 
                    <li><Link className={`${path === "form-redux" ? "mm-active" : ""}`} to="/form-redux">Redux Form</Link></li>
                    <li><Link className={`${path === "form-redux-wizard" ? "mm-active" : ""}`} to="/form-redux-wizard">Wizard Form</Link></li>
                </ul>
            </li>   








            <li className={`${domicilios.includes(path) ? "mm-active" : ""}`}>
              <Link to="widget-basic" className="ai-icon" >
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Domicilios</span>
              </Link>
            </li>








            <li className={`${pedidos.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Pedidos</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${path === "form-element" ? "mm-active" : ""}`}onClick={() => this.props.onClick()} to="/form-element">Form Elements</Link>
                </li>
                <li>
                    <Link className={`${path === "form-wizard" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-wizard">Wizard</Link>
                </li>
                <li>
                    <Link className={`${ path === "form-editor-summernote" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-editor-summernote">Summernote</Link>
                </li>
                <li>
                    <Link className={`${path === "form-pickers" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/form-pickers">Pickers</Link>
                </li>
                <li>
                  <Link className={`${ path === "form-validation-jquery" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/form-validation-jquery">Jquery Validate</Link>
                </li>
              </ul>
            </li>








            <li className={`${facturacion.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Facturaacion</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${  path === "table-bootstrap-basic" ? "mm-active" : "" }`}
                        onClick={() => this.props.onClick()} to="/table-bootstrap-basic"
                    >
                        Bootstrap
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-datatable-basic" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-datatable-basic">
                        Datatable
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-filtering">
                        Table Filtering
                    </Link>
                </li>
                <li>
                    <Link className={`${ path === "table-sorting" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-sorting">
                        Table Sorting
                    </Link>
                </li>
              </ul>
            </li>











            <li className={`${estadistica.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-layer-1"></i>
                    <span className="nav-text">Estadisitica</span>
                </Link>
              <ul >
                <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow" to="#" >Error</Link>
                      <ul >
                        <li>
                            <Link className={`${ path === "page-error-400" ? "mm-active" : ""}`}
                                to="/page-error-400" onClick={() => this.props.onClick3()}
                            >
                                Error 400
                            </Link>
                        </li>
                        <li>
                            <Link className={`${ path === "page-error-403" ? "mm-active" : ""}`}
                                to="/page-error-403"   onClick={() => this.props.onClick3()}
                            >
                                Error 403
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${ path === "page-error-404" ? "mm-active" : ""}`}
                                to="/page-error-404" onClick={() => this.props.onClick3()}
                              >
                                Error 404
                            </Link>
                        </li>
                        <li>
                          <Link
                            className={`${
                              path === "page-error-500" ? "mm-active" : ""
                            }`}
                            to="/page-error-500"
                            onClick={() => this.props.onClick3()}
                          >
                            Error 500
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`${
                              path === "page-error-503" ? "mm-active" : ""
                            }`}
                            to="/page-error-503"
                            onClick={() => this.props.onClick3()}
                          >
                            Error 503
                          </Link>
                        </li>
                      </ul>
                </li>
                <li>
                    <Link className={`${ path === "page-lock-screen" ? "mm-active" : "" }`} to="/page-lock-screen" onClick={() => this.props.onClick3()}>
                        Lock Screen
                    </Link>
                </li>
              </ul>
            </li>

*/}







          </MM>
			<div className="plus-box">
				<p className="fs-13 font-w300 mb-4">Organiza tus menús con el botón de abajo</p>
				<Link className="btn bg-white text-black btn-rounded d-block" to="#">+Añadir Menú</Link>
			</div>
			<div className="copyright">
				<p>
				  <strong>Ortellus Restaurant Dashboard</strong> © 2023 All
				  Rights Reserved
				</p>
				<p>
				  Made {""}
				  <span
					className={`${
					  this.state.loveEmoji ? "heart heart-blast" : "heart"
					}`}
					onClick={() =>
					  this.setState({ loveEmoji: !this.state.loveEmoji })
					}
				  ></span>{" "}
				  by Adworkchain
				</p>
			  </div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
