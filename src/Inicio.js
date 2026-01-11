import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <div className="hero"></div>
            <div className="row section">
                <div className="col s12 m6 l6 xl6">
                    <h1 className="center indigo-text darken-4"><b>Explora el mundo de la fauna marina</b></h1>
                    <h5 className="center">Desde la superficie hasta las profundidades abisales...</h5>
                    <h1 className="center indigo-text darken-4"><b>Explora las distintas secciones</b></h1>
                </div>
                <div className="col s12 m6 l6 xl6">
                    <div className="col s12 m6 l6 xl6">
                        <div className="card">
                            <div class="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPteSSwPFFffNqdmvgvz2YtqOio2uGSEa-gg&s"></img>
                                <span class="card-title">Tiburones</span>
                            </div>
                            <div class="card-content">
                                <p>
                                    <b>Velocidad, instinto y poder</b> bajo la superficie del océano.
                                </p>
                            </div>
                            <div class="card-action">
                                <Link to="/tiburones">Ir allá</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <div className="card">
                            <div class="card-image">
                                <img src="https://www.ballenaswiki.com/Imagenes/evolucion-de-los-cetaceos.jpg"></img>
                                <span class="card-title">Cetáceos</span>
                            </div>
                            <div class="card-content">
                                <p>
                                    <b>Inteligencia, comunicación y poder</b> en las profundidades.
                                </p>
                            </div>
                            <div class="card-action">
                                <Link to="/cetaceos">Ir allá</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <div className="card">
                            <div class="card-image">
                                <img src="https://neofronteras.com/wp-content/photos/Chauliodus.jpg"></img>
                                <span class="card-title">Abisales</span>
                            </div>
                            <div class="card-content">
                                <p>
                                    <b>Extraños, luminosos y letales</b> en el fondo del océano.
                                </p>
                            </div>
                            <div class="card-action">
                                <Link to="/abisal">Ir allá</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <div className="card">
                            <div class="card-image">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.EpoxK_pTeV15scnSCmtEpgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"></img>
                                <span class="card-title">Corales</span>
                            </div>
                            <div class="card-content">
                                <p>
                                    <b>Color, vida y equilibrio</b> bajo la superficie del mar.
                                </p>
                            </div>
                            <div class="card-action">
                                <Link to="/corales">Ir allá</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}