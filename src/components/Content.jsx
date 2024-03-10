import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";

export function Content() {
    return (
        <>
            <Header/>
            <div className="main-content container-fluid">
                <Outlet/>
            </div>
        </>
    );
}
