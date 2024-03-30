import {motion} from "framer-motion";
import {Button} from "./Button.jsx";

export function WeddingList() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Liste de mariage</h1>
            <div className="">
                <div className="wave my-4"></div>
                <p>Nous avons créé une liste de mariage pour ceux qui souhaitent offrir un cadeau</p>
                <Button
                    text="Découvrir la liste"
                    link="https://www.millemercismariage.com/louisenicolas2024/liste.html"
                    linkTarget="_blank"/>
                <div className="wave my-4"></div>
            </div>
        </motion.div>
    );
}