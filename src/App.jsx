import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import {Content} from "./components/Content.jsx";
import {Home} from "./components/Home.jsx";
import {Program} from "./components/Program.jsx";
import {Logistic} from "./components/Logistic.jsx";
import {Housing} from "./components/Housing.jsx";
import {WeddingList} from "./components/WeddingList.jsx";
import {Contact} from "./components/Contact.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";

import './App.css';
import './assets/palmer.ttf';

const HOME_PATH = '';
const PROGRAM_PATH = '/programme';
const LOGISTIC_PATH = '/logistique';
const HOUSING_PATH = '/logement';
const WEDDING_LIST_PATH = '/liste-de-mariage';
const CONTACT_PATH = '/contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Content/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: HOME_PATH,
                element: <Home/>
            },
            {
                path: PROGRAM_PATH,
                element: <Program/>
            },
            {
                path: LOGISTIC_PATH,
                element: <Logistic/>
            },
            {
                path: HOUSING_PATH,
                element: <Housing/>
            },
            {
                path: WEDDING_LIST_PATH,
                element: <WeddingList/>
            },
            {
                path: CONTACT_PATH,
                element: <Contact/>
            },
        ]
    },
]);

function App() {
    return (
        <AnimatePresence mode="wait">
            <RouterProvider router={router}/>
        </AnimatePresence>
    );
}

export default App
