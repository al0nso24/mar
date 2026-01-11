import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer class="page-footer grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">OceanDepths</h5>
                <p class="grey-text text-lighten-4">Explorando la vida marina desde la superficie hasta el abismo.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Secciones</h5>
                <ul>
                  <li className="enlaces_footer"><Link class="grey-text text-lighten-3" to="/tiburones">Tiburones</Link></li>
                  <li className="enlaces_footer"><Link class="grey-text text-lighten-3" to="/cetaceos">Cetáceos</Link></li>
                  <li className="enlaces_footer"><Link class="grey-text text-lighten-3" to="/abisal">Fauna abisal</Link></li>
                  <li className="enlaces_footer"><Link class="grey-text text-lighten-3" to="/corales">Corales</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2026 Copyright Text
            </div>
          </div>
        </footer>
    )
}