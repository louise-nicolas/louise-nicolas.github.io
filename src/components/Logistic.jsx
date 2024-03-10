import {motion} from "framer-motion";

export function Logistic() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Logistique</h1>
        </motion.div>
    );
}