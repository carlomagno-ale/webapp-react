import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function DefaultLayout() {

    return (
        <>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;