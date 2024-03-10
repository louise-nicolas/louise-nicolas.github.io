import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Accueil</NavLink>
                            <NavLink className="nav-link" to="/programme">Programme</NavLink>
                            <NavLink className="nav-link" to="/logistique">Logistique</NavLink>
                            <NavLink className="nav-link" to="/logement">Logement</NavLink>
                            <NavLink className="nav-link" to="/liste-de-mariage">Liste de mariage</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}