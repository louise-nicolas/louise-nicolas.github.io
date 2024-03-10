import {motion} from "framer-motion";

export function Contact() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Contact</h1>
        </motion.div>
    );
}