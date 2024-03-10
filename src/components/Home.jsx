import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

import './Home.css'

export function Home() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            // transition={{duration: 0.2}}
        >
            <div className="d-flex align-items-center">
                <div className="row row-cols-1 row-cols-sm-2 g-3">
                    <div className="home-item col">
                        <NavLink className="nav-link" to="/programme">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Programme</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link" to="/logistique">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Logistique</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link" to="/logement">
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">Logement</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link" to="/liste-de-mariage">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Liste de mariage</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}