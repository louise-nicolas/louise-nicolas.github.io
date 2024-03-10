import {motion} from "framer-motion";

export function Program() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Programme</h1>
        </motion.div>
    );
}