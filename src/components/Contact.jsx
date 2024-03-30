import {motion} from "framer-motion";

export function Contact() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Contact</h1>
            <div className="">
                <div className="wave my-4"></div>
                <div className="mb-2">
                    <span className="lnr lnr-envelope fs-3 color-orange"></span>
                </div>
                <h6 className="mb-3">Louise Lurson et Nicolas Boulonnais</h6>
                <p>3 rue marguerite de Rochechouart 75009 Paris</p>
                <p>louise.lurson@gmail.com - nboulonnais@gmail.com</p>
                <div className="wave my-4"></div>
            </div>
        </motion.div>
    );
}