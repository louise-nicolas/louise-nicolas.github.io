import {motion} from "framer-motion";

export function Logistic() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1 className="font-palmer">Logistique</h1>
            <div className="">
                <div className="wave my-4"></div>
                <h2 className="h4 mb-3">Comment se rendre à Bourgoult</h2>
                <p>
                    <strong className="color-orange">Venant de Paris par A13</strong><br/> Sortir à Bonnières (sortie 14) pour traverser la Seine
                    à Vernon, où vous prendrez la D 181 en direction de Gisors-Beauvais. A Corbie, à 10 Km de Vernon,
                    prendre à gauche vers Tourny-Forêt-le-Folie et suivre les fléchages « Grange de Bourgoult ».
                </p>
                <p>
                    <strong className="color-orange">Venant de Paris par A15 Cergy- Pontoise</strong><br/> Suivre Rouen par N 14 et à 3 km après
                    les Thilliers-en-Vexin, tourner à gauche vers Les Andelys. A Harquency, suivre les fléchages «
                    Grange de Bourgoult » par D9 Forêt la Folie.
                </p>
                <p>
                    <strong className="color-orange">Venant de Rouen par N 14</strong><br/> Direction Cergy-Pontoise 4Kms après Ecouis et après
                    le giratoire de Saint-Jean-de-Frenelles,continuer 300 m sur la N14 et prendre à droite vers
                    Léomesnil-Harquency, puis suivre dans Harquency les fléchages « Grange de Bourgoult », par D9 vers
                    Forêt la Folie.
                </p>
                <p>
                    <strong className="color-orange">Venant de Rouen par A13</strong><br/> (sortie 17) vers Gaillon, puis Les Andelys, puis
                    traverser la ville vers Magny en Vexin, puis dans Harquency tourner à droite sur la D9 vers Forêt la
                    Folie.
                </p>
                <p>
                    <i>Coordonnées GPS : Latitude : 49.2377403 – Longitude : 1.5029008</i>
                </p>
                <p>
                    <strong className="color-orange">Besoin d'un taxi ?</strong><br/>
                    0607434386 / 0232545645
                </p>
                <div className="wave my-4"></div>
            </div>
        </motion.div>
    );
}