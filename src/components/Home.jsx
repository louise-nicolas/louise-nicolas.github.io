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
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="home-item col">
                        <NavLink className="nav-link w-100" to="/programme">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="lnr lnr-calendar-full fs-3 color-orange"></span>
                                    </div>
                                    <h5 className="card-title">Programme</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link w-100" to="/logistique">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="lnr lnr-car fs-2 color-orange"></span>
                                    </div>
                                    <h5 className="card-title">Logistique</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link w-100" to="/logement">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="lnr lnr-home fs-2 color-orange"></span>
                                    </div>
                                    <h5 className="card-title">Logement</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="home-item col">
                        <NavLink className="nav-link w-100" to="/liste-de-mariage">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="lnr lnr-map fs-3 color-orange"></span>
                                    </div>
                                    <h5 className="card-title">Liste de mariage</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {/*<div className="home-item col">*/}
                    {/*    <NavLink className="nav-link w-100" to="/contact">*/}
                    {/*        <div className="card">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Contact</h5>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                </div>
            </div>
        </motion.div>
    );
}