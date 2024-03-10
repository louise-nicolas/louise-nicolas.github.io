import {motion} from "framer-motion";

export function WeddingList() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Liste de mariage</h1>
        </motion.div>
    );
}