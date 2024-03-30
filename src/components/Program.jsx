import {motion} from "framer-motion";

export function Program() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Programme</h1>
            <div className="">
                <div className="wave my-4"></div>
                <div className="row justify-content-center mt-6">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-8">
                            <div className="timeline timeline-one dark px-3 px-sm-0">
                                <div className="timeline-item">
                                    <h3 className="h6 mb-2">Samedi - 16h00</h3>
                                    <p>
                                        <strong className="color-orange">Célébration mariage</strong><br/>
                                        <i>Église Saint-Georges<br/> Mézières-en-Vexin</i>
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="h6 mb-2">Samedi - 17h30</h3>
                                    <p>
                                        <strong className="color-orange">Cocktail</strong><br/>
                                        <i>Grange de Bourgoult,<br/> 27700 Harquency</i>
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="h6 mb-2">Samedi - 20h00</h3>
                                    {/*<img className="mt-2"*/}
                                    {/*     src="../../assets/img/office.png"*/}
                                    {/*     alt="Themesberg workspace"*/}
                                    {/*     width="300"/>*/}
                                    <p>
                                        <strong className="color-orange">Diner</strong><br/>
                                        <i>Grange de Bourgoult,<br/> 27700 Harquency</i>
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h3 className="h6 mb-2">Dimanche - 12h30</h3>
                                    <p>
                                        <strong className="color-orange">Brunch</strong><br/>
                                        <i>Grange de Bourgoult,<br/> 27700 Harquency</i>
                                    </p>
                                    {/*<img className="mt-2" src="../../assets/img/signature.svg" alt="signature" width="100"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave my-4"></div>
            </div>
        </motion.div>
    );
}