import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <Link to="/inicio" className="brand-logo"><b>OceanDepths</b></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/tiburones">Tiburones</Link></li>
                        <li><Link to="/cetaceos">Cetáceos</Link></li>
                        <li><Link to="/abisal">Abisales</Link></li>
                        <li><Link to="/corales">Corales</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}