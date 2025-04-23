import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"
import GlobalContext from "../contexts/GlobalContext";
import LoaderComponent from "../components/reviews/LoaderComponent";

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>
                {
                    isLoading && (
                        <LoaderComponent />
                    )
                }

                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;