import {motion} from "framer-motion";
import {Button} from "./Button.jsx";
import Pdf from '../assets/liste_hotels.pdf';

export function Housing() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Logement</h1>
            <div className="">
                <div className="wave my-4"></div>
                <Button
                    text="Ou dormir ?"
                    link={Pdf}
                    linkTarget="_blank"/>
                <div className="wave my-4"></div>
            </div>
        </motion.div>
    );
}